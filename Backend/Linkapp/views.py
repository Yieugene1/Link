from django.shortcuts import get_object_or_404
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.views import APIView
from .models import Profile, Post,FollowersCount
from .serializers import UserSerializer, ProfileSerializer, PostSerializer,LikePostSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse
from rest_framework_simplejwt.tokens import RefreshToken



class tokenrefresh(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request):
        refresh_token = request.COOKIES.get('refresh')

        token=RefreshToken(refresh_token)
        new_accesstoken = str(token)
        Response(
            {
                "message":"update token"
            },status=status.HTTP_200_OK
        )
        Response.set_cookie(
            key="access",
            value=new_accesstoken,
            httponly=True,        
            secure=True,          
            samesite='None'  
        )
        return Response

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer


class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    permission_classes = [AllowAny]
    def post(self,request,*args,**kwargs):
        data = request.user
        Serializer = UserSerializer(data= data)
        if Serializer.is_valid():
            Serializer.save()
            return Response(
                {
                    "data":Serializer.data
                },status=status.HTTP_200_OK
            )
        else:
             return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
    def post(self,request,*args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data =serializer.validated_data
        access_token=data['access']
        refresh_token=data['refresh']
        response = JsonResponse({
            "message": "Login successful",
        })

        response.set_cookie(
            key="access",
            value=access_token,
            httponly=True,        
            secure=True,          
            samesite='None',   
            path='/',
            max_age=36000   
        )
        response.set_cookie(
            key="refresh",
            value=refresh_token,
            httponly=True,
            secure=True,
            samesite='None',
            path='/',
            max_age=36000
        )

        return response

#profile代码

class ProfileListView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (AllowAny,)

class ProfileUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self):
        profile, created = Profile.objects.get_or_create(user=self.request.user)
        return profile

    def put(self, request, *args, **kwargs):
        
        profile = self.get_object()
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
                serializer.save()
                return Response({
                    'message': 'Profile updated successfully',
                    'data': serializer.data
                }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


#帖子代码


class Postlist(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes=[IsAuthenticated]
    def get_queryset(self):
        return Post.objects.filter(user=int(self.request.user.id))
    


class PostView(APIView):
    permission_classes = [IsAuthenticated]
    
    def post(self, request, *args, **kwargs):
        serializer = PostSerializer(data=request.data) 
        if serializer.is_valid():
            serializer.save(user=self.request.user)  
            return Response(
                {
                    'message': 'Post submitted successfully',
                    'data': serializer.data
                },
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def put(self, request, post_id, *args, **kwargs):
        
        post = get_object_or_404(Post, post_id=post_id)

        if post.user != request.user:
            return Response({'error': 'You do not have permission to update this post.'}, status=status.HTTP_403_FORBIDDEN)
        
        serializer = PostSerializer(post, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {
                    'message': 'Post updated successfully',
                    'data': serializer.data
                },
                status=status.HTTP_200_OK
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, post_id, *args, **kwargs):

        post = get_object_or_404(Post, post_id=post_id)

        if post.user != request.user:
            return Response({'error': 'You do not have permission to delete this post.'}, status=status.HTTP_403_FORBIDDEN)
        
        post.delete()
        return Response({'message': 'Post deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    

class MyPost(generics.ListAPIView):
    permission_classes=[IsAuthenticated]
    serializer_class=PostSerializer
    def get_queryset(self):
        return Post.objects.filter(user=self.request.user)


class LikePostView(APIView):
    permission_classes=[IsAuthenticated]
    def post(self,request,post_id,*org,**kwargs):
        request.data['user'] = request.user.id
        request.data['post'] = post_id
        serializer =LikePostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {
                    "message":"Like this Post",
                    'data':serializer.data
                },status=status.HTTP_200_OK
            )
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]
    def post(self,request):
        response =Response(
            {"message":"logout successfully"},
            status=status.HTTP_200_OK
                   )
        response.delete_cookie('access')
        response.delete_cookie('refresh')
        return response


#关注代码

class FollowUserView(APIView):
    def post(self, request, username):

        current_user = request.user.id
        target_user = get_object_or_404(User, username=username)
        
        if FollowersCount.objects.filter(follower=current_user, following=target_user).exists():
            return Response({"message": "You are already following this user."}, status=status.HTTP_400_BAD_REQUEST)

        FollowersCount.objects.create(follower=current_user, following=target_user)
        return Response({"message": "User followed successfully."}, status=status.HTTP_201_CREATED)

class UnFollowUserView(APIView):
    def delete(self,request,useranme):
        current_user = request.user.id
        target_user =get_object_or_404(User,useranme=useranme)
        Follow_relationship = FollowersCount.objects.filter(follower=current_user,following=target_user)
        if not Follow_relationship.exists():
            return Response(
                {
                    "message":"You are not follow this user",
                },status=status.HTTP_204_NO_CONTENT
            )
        Follow_relationship.delete()
        return Response(
            {
                "message":"User unfollowed successfully"
            },status=status.HTTP_200_OK
        )
    
        
class FollowingListView(APIView):
    def get(self, request, username):
        user = get_object_or_404(User, username=username)
        following = user.following_set.all()  
        following_data = [{"username": follow.following.username} for follow in following]
        return Response(following_data, status=status.HTTP_200_OK)


class Loginstatus(APIView):
    permission_classes=[IsAuthenticated]
    def post(self, request):
        return Response(
                {
                    "message": "logined",
                },status=status.HTTP_200_OK
        )
