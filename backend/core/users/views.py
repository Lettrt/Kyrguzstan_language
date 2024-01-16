from django.contrib.auth import get_user_model
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken

from . import serializers

User = get_user_model()


@swagger_auto_schema(
    method='post',
    operation_description='Регистрация пользователя',
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            "username": openapi.Schema(type=openapi.TYPE_STRING),
            'password': openapi.Schema(type=openapi.FORMAT_PASSWORD),
            'password2': openapi.Schema(type=openapi.FORMAT_PASSWORD),
            "email": openapi.Schema(type=openapi.FORMAT_EMAIL),
        }
    )
)
@api_view(['POST'])
def registration(request):
    serializer = serializers.UserRegistrate(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    refresh = RefreshToken.for_user(user)
    user_data = {
        'user': serializers.UserRegistrate(user).data,
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

    return Response(user_data, status=201)
