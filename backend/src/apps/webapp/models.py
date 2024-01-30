from django.db import models
from django.contrib.auth import get_user_model

from ..base.services import path_theme_image
from django.db.models import Count


User = get_user_model()


class ThemeOFWords(models.Model):
    """Модель тем.

    ### Attrs:
    - title (str):
        название фильмы или темы.
    - description (str):
        описание данной темы.
    - image (img):
        картинка данной темы.
    """


    title = models.CharField(
        max_length=50, 
        verbose_name='Название темы',
        help_text="Введите тему,которая объединяет выбранные слова",
    )
    description = models.TextField( 
        verbose_name='Описание темы',
        help_text="Введите краткое описание темы",
    )
    image = models.ImageField(
        upload_to=path_theme_image,
        verbose_name='Фото темы',
        help_text="Загрузите фото темы",
        blank=True,
    )
    
    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = "Темы слов"
        verbose_name_plural = "Темы слов"

class RUS_ENG_Words(models.Model):

    """Модель русско-английских слов.

    ### Attrs:
    - theme(FK):
        Тема, к которой относятся слова.
    - ru_words(str):
        Слова на русском языке.
    - eng_words(str):
        слова на английском языке.
    """


    theme=models.ForeignKey(
        ThemeOFWords,
        on_delete=models.CASCADE,         
        help_text="Выберите тему, к которой относятся слова",
        verbose_name='Тема, к которой относятся слова',
    )
    ru_words = models.CharField(
        max_length=50,
        verbose_name='Русские слова',
        help_text="Введите слово на русском языке",
    )
    eng_words = models.CharField(
        max_length=50,
        verbose_name='Английские слова',
        help_text="Введите слово на английском языке",
    )

    def __str__(self) -> str:
        return self.ru_words
    
    class Meta:
        verbose_name = "Русско-английские слова"
        verbose_name_plural = "Русско-английские слова"


class RUS_KGZ_Words(models.Model):

    """Модель русско-киргизскиех слов.

    ### Attrs:
    - ru_words(str):
        Слова на русском языке.
    - theme(FK):
        Тема, к которой относятся слова.
    - kgz_words(str):
        Слова на киргизском языке.
    """


    ru_words = models.CharField(
        max_length=50,
        verbose_name='Русские слова',
        help_text="Введите слово на русском языке",
    )

    theme=models.ForeignKey(
        ThemeOFWords,
        on_delete=models.CASCADE,         
        help_text="Выберите тему, к которой относятся слова",
        verbose_name='Тема, к которой относятся слова',
    )
    
    kgz_words = models.CharField(
        max_length=50,
        verbose_name='Киргизские слова',
        help_text="Введите слово на кыргизском языке",
    )

    def __str__(self) -> str:
        return self.ru_words
    
    class Meta:
        verbose_name = "Русско-киргизские слова"
        verbose_name_plural = "Русско-киргизские слова"



class ENG_KGZ_Words(models.Model):

    """Модель англо-киргизских слов.

    ### Attrs:
    - kgz_words(str):
        Слова на Кыргызском языке.
   - theme(FK):
        Тема, к которой относятся слова.
    - eng_words(str):
        слова на английском языке.
    """


    eng_words = models.CharField(
        max_length=50,
        verbose_name='Английские слова',
        help_text="Введите слово на английском языке",
    )
    theme=models.ForeignKey(
        ThemeOFWords,
        on_delete=models.CASCADE,         
        help_text="Выберите тему, к которой относятся слова",
        verbose_name='Тема, к которой относятся слова',
    )
    kgz_words = models.CharField(
        max_length=50,
        verbose_name='Киргизские слова',
        help_text="Введите слово на кыргызском языке",
    )

    def __str__(self) -> str:
        return self.eng_words
    
    class Meta:
        verbose_name = "Англо-киргизские слова"
        verbose_name_plural = "Англо-киргизские слова"
