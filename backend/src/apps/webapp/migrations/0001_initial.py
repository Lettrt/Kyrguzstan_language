# Generated by Django 5.0.1 on 2024-01-24 14:10

import apps.base.services
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Words',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('kg_words', models.CharField(max_length=50, verbose_name='Кыргызские слова')),
                ('ru_words', models.CharField(max_length=50, verbose_name='Русские слова')),
                ('eng_words', models.CharField(max_length=50, verbose_name='Английские слова')),
            ],
            options={
                'verbose_name': 'Слова',
                'verbose_name_plural': 'Слова',
            },
        ),
        migrations.CreateModel(
            name='ThemeOFWords',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=50, verbose_name='Заголовок')),
                ('description', models.TextField(verbose_name='Описание')),
                ('image', models.ImageField(upload_to=apps.base.services.path_theme_image, verbose_name='Фото темы')),
                ('words', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='theme_of_words', to='webapp.words')),
            ],
            options={
                'verbose_name': 'Темы слов',
                'verbose_name_plural': 'Темы слов',
            },
        ),
    ]
