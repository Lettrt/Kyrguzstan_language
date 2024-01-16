from django.contrib.auth import get_user_model

User = get_user_model()


def path_user_avatar(instance: User, file: str) -> str:
    """ Путь к аватару пользователя
    """
    return f"user_{instance.user.id}/avatar/{file}"
