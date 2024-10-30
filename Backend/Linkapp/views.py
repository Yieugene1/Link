from django.shortcuts import get_object_or_404
from rest_framework import generics
from django.contrib.auth.models import User
from rest_framework.views import APIView
from .models import Profile, Post
from .serializers import UserSerializer, ProfileSerializer, PostSerializer
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import CustomTokenObtainPairSerializer
from rest_framework.response import Response
from rest_framework import status


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


class ProfileUpdateView(APIView):
    permission_classes = [IsAuthenticated]

    def get_object(self):
        profile, created = Profile.objects.get_or_create(user=self.request.user)
        return profile

    def put(self, request, *args, **kwargs):
        
        if self.request.user.username != self.request.data.get('user'):
            return Response({'errors':"You do not have permission to update this profile."},status=status.HTTP_403_FORBIDDEN)
        profile = self.get_object()
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
                serializer.save()
                return Response({
                    'message': 'Profile updated successfully',
                    'data': serializer.data
                }, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class PostView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, *args, **kwargs):
        data = request.data.copy()
        data['user'] = request.user.username
        if self.request.user.username != self.request.data.get('user'):
            return Response({'errors':"You do not have permission to update this profile."},status=status.HTTP_403_FORBIDDEN)
        serializer = PostSerializer(data=data)
        if serializer.is_valid():
            serializer.save()
            return Response(
                {
                    'message': 'Post submitted successfully',
                    'data': serializer.data
                },
                status=status.HTTP_201_CREATED
            )
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    # def delect(self, request, Post_id):
    #     user = request.user
    #     post = get_object_or_404(Post, id=Post_id)
    #     if post.user.username !=user.username:
    #         return Response({'error':'You do not have permission to delete this post.'})
    #     post.delete()
    #     return Response({'message':'Post deleted successfully'})

