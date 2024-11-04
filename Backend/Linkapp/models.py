import uuid
from django.db import models

from django.contrib.auth.models import User


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    bio = models.TextField(blank=True)
    profileimg = models.ImageField(upload_to='profile_images',blank=True, null=True)

    def __str__(self):
        return self.user.username


class Post(models.Model):
    post_id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    post_image = models.ImageField(upload_to='post_image',blank=True, null=True)
    avatar=models.ImageField(upload_to='post_image',blank=True, null=True)
    title = models.TextField()
    content = models.TextField()
    timestamp = models.DateTimeField(auto_now_add=True)
    likes = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.user.username} - {self.title[:20]}'


class LikePost(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE,default=1)  
    post = models.ForeignKey(Post, on_delete=models.CASCADE)



class FollowersCount(models.Model):
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name="follower")
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following")

    def __str__(self):
        return f'{self.follower.username} follows {self.following.username}'
