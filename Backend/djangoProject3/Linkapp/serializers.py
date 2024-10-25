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
    def validate(self, attrs):
        email = attrs.get("email", "")
        password = attrs.get("password", "")

        try:
            user = User.objects.get(email=email)
        except User.DoesNotExist:
            raise serializers.ValidationError("无效的邮箱或密码")

        if not user.check_password(password):
            raise serializers.ValidationError("无效的邮箱或密码")

        # 更新 username 到 attrs 中，以便 JWT 能生成 Token
        attrs["username"] = user.username
        return super().validate(attrs)


class ProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ['user_id', 'username', 'bio', 'profileimg']


class PostSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)  # 嵌套用户序列化

    class Meta:
        model = Post
        fields = ['post_id', 'user', 'image', 'caption', 'created_at', 'numOfLike']  # 所有你想展示的字段


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
