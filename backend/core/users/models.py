from django.contrib.auth.models import AbstractUser
from django.db import models

from base.services import user_avatar


class User(AbstractUser):
    """ Модель AbstractUser

    ### Attrs:
    - avatar (file):
        аватарка пользователя
    """
    avatar = models.ImageField(upload_to=user_avatar, null=True)
