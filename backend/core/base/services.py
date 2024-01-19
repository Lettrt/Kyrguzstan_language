import os


def path_user_avatar(instance, file: str) -> str:
    """ Путь к аватару пользователя
    """
    return f"user_{instance.id}/avatar/{file}"


def delete_of_file(path_file) -> None:
    """ Удаление файла
    """
    if os.path.exists(path_file):
        os.remove(path_file)


def path_theme_image(instance, file: str) -> str:
    """ Путь к изображению темы OF Words
    """
    return f"theme/{file}"
