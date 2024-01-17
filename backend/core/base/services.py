

def path_user_avatar(instance, file: str) -> str:
    """ Путь к аватару пользователя
    """
    return f"user_{instance.id}/avatar/{file}"
