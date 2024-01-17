from django.contrib.auth import get_user_model
from drf_yasg import openapi
from drf_yasg.utils import swagger_auto_schema
from rest_framework import permissions, status, mixins, viewsets
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework_simplejwt.token_blacklist.models import BlacklistedToken, OutstandingToken
from rest_framework_simplejwt.tokens import RefreshToken

from . import serializers

User = get_user_model()


class UserRULD(mixins.RetrieveModelMixin,
               mixins.UpdateModelMixin,
               mixins.ListModelMixin,
               mixins.DestroyModelMixin,
               viewsets.GenericViewSet):
    """
    Конечная точка API, которая позволяет извлекать, обновлять, перечислять и удалять пользователей
    """
    queryset = User.objects.all()
    serializer_class = serializers.UserSerializer


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
    serializer = serializers.UserRegistration(data=request.data)
    serializer.is_valid(raise_exception=True)
    user = serializer.save()
    refresh = RefreshToken.for_user(user)
    user_data = {
        'user': serializers.UserRegistration(user).data,
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

    return Response(user_data, status=201)


@swagger_auto_schema(
    method='post',
    operation_description='Авторизация пользователя',
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            "username": openapi.Schema(type=openapi.TYPE_STRING),
            'password': openapi.Schema(type=openapi.FORMAT_PASSWORD),
        }
    )
)
@api_view(['POST'])
def authentication(request):
    serializer = serializers.UserAuth(data=request.data)
    serializer.is_valid(raise_exception=True)

    username = request.data.get('username')
    user = User.objects.get(username=username)

    refresh = RefreshToken.for_user(user)
    user_data = {
        'user': serializer.validated_data,
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

    return Response(user_data, status=201)


@swagger_auto_schema(
    method='post',
    operation_description='Добавляет refresh токен пользователя в черный список',
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            "refresh": openapi.Schema(type=openapi.TYPE_STRING),
        }
    ),
    security=[{"Bearer": []}],
    responses={
        status.HTTP_205_RESET_CONTENT: openapi.Response(
            description='Successfully logged out',
            examples={'detail': 'Successfully logged out'}
        ),
        status.HTTP_400_BAD_REQUEST: openapi.Response(
            description='Token not valid',
            examples={'detail': 'Token not valid'}
        ),
    }
)
@api_view(['POST'])
@permission_classes([permissions.IsAuthenticated])
def logout_user(request):
    try:
        token = OutstandingToken.objects.filter(user_id=request.data.get('refresh'))
        BlacklistedToken.objects.get_or_create(token=token)
        return Response({'detail': 'Successfully logged out'}, status=205)
    except OutstandingToken.DoesNotExist:
        return Response({'detail': 'Token not valid'}, status=400)
