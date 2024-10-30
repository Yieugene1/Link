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
    image = models.ImageField(upload_to='post_image',blank=True, null=True)
    caption = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)
    numOfLike = models.IntegerField(default=0)

    def __str__(self):
        return f'{self.user.username} - {self.caption[:20]}'


class LikePost(models.Model):
    post = models.ForeignKey(Post, on_delete=models.CASCADE)
    username = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.username} liked {self.post.post_id}'


class FollowersCount(models.Model):
    follower = models.ForeignKey(User, on_delete=models.CASCADE, related_name="follower")
    following = models.ForeignKey(User, on_delete=models.CASCADE, related_name="following")

    def __str__(self):
        return f'{self.follower.username} follows {self.following.username}'
