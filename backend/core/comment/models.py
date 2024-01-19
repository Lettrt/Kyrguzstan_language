from django.db import models

from webapp.models import ThemeOFWords
from datetime import datetime  
from core.core import settings
from django.utils.translation import gettext_lazy as _

# Create your models here.
class Review(models.Model):
    """Модель Комментариев
    
    ### Attrs:
    - themes (FK)
        К какой теме относиться.
    - name (str)
        Имя пользователя.
    - body (str)
        Тект комментария.
    - created (int)
        Время создания комментария.
    - updated (int)
        Время изменения комментария.
    - active (boolean)
        Статус комментария.
    """  
    themes = models.ForeignKey(
        ThemeOFWords, 
        on_delete=models.CASCADE,
        related_name='reviews',default=None
        )  
    name = models.ForeignKey(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE, 
        related_name='user_review',
        default=None
        )  
    body = models.TextField(
        related_name="Сообщение",
        default=None
        )  
    created = models.DateTimeField(
        default=datetime.now
        )  
    updated = models.DateTimeField(
        default=datetime.now
        )  
    active = models.BooleanField(
        default=True
        )  
    
    class Meta:  
        verbose_name = "Комент"
        verbose_name_plural = "Комент"
        ordering = ('created',)  
          
    def __str__(self):  
        return f'Comment by {self.name} on {self.themes}'