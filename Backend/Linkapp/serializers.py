from django.contrib.auth.models import User
from rest_framework import serializers
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from .models import Profile, LikePost, FollowersCount, Post



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User(
            email=validated_data['email'],
            username=validated_data['username']
        )
        user.set_password(validated_data['password'])
        user.save()
        return user


class CustomTokenObtainPairSerializer(TokenObtainPairSerializer):
    def validate(self, validated_data):
        email = validated_data.get("username")
        password = validated_data.get("password")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("无效的邮箱")

        if not user.check_password(password):
            raise serializers.ValidationError("密码错误")

        validated_data["username"] = user.username
        data=super().validate(validated_data)
        return data


class ProfileSerializer(serializers.ModelSerializer):
    profileimg = serializers.ImageField(required=False,allow_null=True)
    user = serializers.CharField()
    class Meta:
        model = Profile
        fields = [ 'user', 'bio', 'profileimg']
    def validate_user(self, value):
        # 尝试通过 username 查找 User 实例
        try:
            user = User.objects.get(username=value)
        except User.DoesNotExist:
            raise serializers.ValidationError("User with this username does not exist.")
        return user

    def create(self, validated_data):
        # 从 validated_data 中获取已验证的 User 实例
        validated_data['user'] = validated_data.pop('user')
        return super().create(validated_data)

    def update(self, instance, validated_data):

        return super().update(instance, validated_data)


class PostSerializer(serializers.ModelSerializer):
    post_image = serializers.ImageField(required=False, allow_null=True)

    class Meta:
        model = Post
        fields = ['post_id', 'user', 'post_image', 'title', 'content', 'timestamp', 'likes']
        read_only_fields = ['post_id', 'user', 'timestamp', 'likes']  


    def create(self, validated_data):
        
        return Post.objects.create(**validated_data)

    def update(self, instance, validated_data):
        instance.post_image = validated_data.get('post_image', instance.post_image)
        instance.title = validated_data.get('title', instance.title)
        instance.content = validated_data.get('content', instance.content)
        instance.save()
        return instance

class LikePostSerializer(serializers.ModelSerializer):
    post = PostSerializer(read_only=True)

    class Meta:
        model = LikePost
        fields = ['post', 'username']


class FollowersCountSerializer(serializers.ModelSerializer):
    follower = UserSerializer(read_only=True)
    following = UserSerializer(read_only=True)

    class Meta:
        model = FollowersCount
        fields = ['follower', 'following']
