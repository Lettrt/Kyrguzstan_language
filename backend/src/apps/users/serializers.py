from django.contrib.auth import get_user_model
from django.contrib.auth.password_validation import validate_password
from rest_framework import serializers
from rest_framework.validators import UniqueValidator

from ..base.services import delete_of_file

User = get_user_model()


class UserRegistration(serializers.Serializer):
    """
    Сериализатор для регистрации пользователя
    """
    id = serializers.IntegerField(allow_null=True, required=False)
    username = serializers.CharField(
        allow_null=False,
        required=False,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    email = serializers.EmailField(
        allow_null=False,
        required=False,
        validators=[UniqueValidator(queryset=User.objects.all())]
    )
    password = serializers.CharField(
        write_only=True,
        required=True,
        validators=[validate_password]
    )
    password2 = serializers.CharField(write_only=True, required=True)
    avatar = serializers.ImageField(allow_null=True, required=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'password', 'password2', 'email', 'avatar')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError({"password": "Password fields didn't match."})

        return attrs

    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()

        return user


class UserAuth(serializers.Serializer):
    """
    Сериализатор для аутентификации пользователя
    """
    id = serializers.IntegerField(allow_null=True, required=False)
    username = serializers.CharField()
    password = serializers.CharField(write_only=True)
    email = serializers.EmailField(allow_null=True, required=False)

    def validate(self, attrs):
        try:
            user = User.objects.get(username=attrs['username'])
        except User.DoesNotExist:
            raise serializers.ValidationError({'username': 'User not found'})

        # Проверяем пароль
        if not user.check_password(attrs['password']):
            raise serializers.ValidationError({'password': 'Incorrect password'})

        # Добавляем дополнительные параметры в attrs
        attrs['id'] = user.id
        attrs['email'] = user.email
        attrs['avatar'] = "media/" + str(user.avatar) if user.avatar else None

        return attrs


class UserSerializer(serializers.ModelSerializer):
    """
    Сериализатор для CRUD пользователя
    """
    username = serializers.CharField(
        required=False,
        validators=[
            UniqueValidator(queryset=User.objects.all())
        ]
    )
    email = serializers.EmailField(
        required=False,
        validators=[
            UniqueValidator(queryset=User.objects.all())
        ]
    )
    avatar = serializers.ImageField(required=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'avatar')

    def update(self, instance, validated_data):
        # Удаление старого файла
        try:
            delete_of_file(instance.avatar.path)
        except ValueError:
            pass
        return super().update(instance, validated_data)
