from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()


class Words(models.Model):
    """Модель слов.

    ### Attrs:
    - kg_words(str):
        Слова на Кыргызском языке.
    - ru_words(str):
        Слова на русском языке.
    - eng_words(str):
        слова на английском языке.
    """
    
    kg_words = models.CharField(
        max_length=50, 
        null=False, 
        blank=False, 
        default=None, 
        verbose_name='Кыргызские слова',
        )
    ru_words = models.CharField(
        max_length=50,
        null=False,
        blank=False,
        default=None,
        verbose_name='Русские слова',
        )
    eng_words = models.CharField(
        max_length=50,
        null=False,
        blank=False,
        default=None,
        verbose_name='Английские слова',
        )

    def __str__(self) -> str:
        return self.kg_words
    
    class Meta:
        verbose_name = "Слова"
        verbose_name_plural = "Слова"


class Theme_of_words(models.Model):
    """Модель тем.

    ### Attrs:
    - title (str):
        название фильмы или темы.
    - description (str):
        описание данной темы.
    - image (img):
        картинка данной темы.
    - words (FK):
        слова для данной темы.
    """
    title = models.CharField(
        max_length=50,
        null=False, 
        blank=False, 
        verbose_name='Заголовок',
        )
    description = models.CharField(
        max_length=50,
        null=False, 
        default=None, 
        blank=False, 
        verbose_name='Описание',
        )
    image = models.ImageField(
        default=None, 
        verbose_name='Фото темы',
        )
    words = models.ForeignKey(
        Words,
        on_delete=models.CASCADE,
        ) 

    def __str__(self) -> str:
        return self.title
    
    class Meta:
        verbose_name = "Темы слов"
        verbose_name_plural = "Темы слов"
    









