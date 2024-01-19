from django.db import models

from webapp.models import ThemeOFWords, Words
from django.contrib.auth import get_user_model

User = get_user_model()


class Rating(models.Model):
    theme_words = models.ForeignKey(ThemeOFWords,on_delete=models.CASCADE,
                related_name='ratings', verbose_name='Тема слов')
    word = models.ForeignKey(Words,on_delete=models.CASCADE,
                related_name='ratings', verbose_name='Слово')
    stars = models.FloatField(validators=[min(1.0),max(5.0)])
    user = models.ForeignKey(User, on_delete=models.CASCADE,
                related_name='ratings',verbose_name='Пользователь')
    created_at = models.DateField(auto_now_add=True)


    class Meta:
        verbose_name = "Рейтинг"
        verbose_name_plural = "Рейтинги" 
    