
from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework.exceptions import AuthenticationFailed

# 自定义的 CookieJWTAuthentication 类
class CookieJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        token = request.COOKIES.get('access')
        print(token)
        if not token:
            return None

        validated_token = self.get_validated_token(token)
        return self.get_user(validated_token), validated_token
