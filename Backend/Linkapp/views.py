from django.shortcuts import get_object_or_404
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.views import APIView
from .models import Profile, Post
from .serializers import UserSerializer, ProfileSerializer, PostSerializer,LikePostSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework import status
from django.http import JsonResponse


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = UserSerializer


class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [AllowAny]


class UserListView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = (AllowAny,)


class ProfileListView(generics.ListAPIView):
    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer
    permission_classes = (AllowAny,)


class CustomTokenObtainPairView(TokenObtainPairView):
    serializer_class = CustomTokenObtainPairSerializer
    def post(self,request,*args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        data =serializer.validated_data
        access_token=data['access']
        refresh_token=data['access']
        response = JsonResponse({
            "message": "Login successful",
        })

        response.set_cookie(
            key="access",
            value=access_token,
            httponly=True,        
            secure=True,          
            samesite='None'      
        )
        response.set_cookie(
            key="refresh",
            value=refresh_token,
            httponly=True,
            secure=True,
            samesite='None'
        )

        return response



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
