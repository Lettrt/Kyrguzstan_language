from datetime import datetime
from django.db import models
from django.conf import settings

from ..webapp.models import ThemeOFWords


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