from django.urls import path
from .views import RegisterView, UserListView, ProfileListView, ProfileUpdateView,PostView,Postlist
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import CustomTokenObtainPairView
urlpatterns = [
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', CustomTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('users/', UserListView.as_view(), name='user_list'),
    path('profile/',ProfileListView.as_view(),name='Profile_list'),
    path('updataProfile/',ProfileUpdateView.as_view(),name='Profile_updata_create'),
    path('PostView/',PostView.as_view(),name='Postview'),
    path('PostView/<uuid:post_id>/',PostView.as_view(),name='PostView_du'),
    path('Post/',Postlist.as_view(),name='Postlist'),

]
