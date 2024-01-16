

def user_avatar(instance, file: str) -> str:
    """Путь к аватару пользователя
    """
    print(type(instance))
    return f"user_{instance.user.id}/avatar/{file}"
