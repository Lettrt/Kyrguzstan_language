# Generated by Django 5.0.1 on 2024-01-30 15:07

import apps.base.services
import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webapp', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='themeofwords',
            name='words',
        ),
        migrations.AlterField(
            model_name='themeofwords',
            name='description',
            field=models.TextField(help_text='Введите краткое описание темы', verbose_name='Описание темы'),
        ),
        migrations.AlterField(
            model_name='themeofwords',
            name='image',
            field=models.ImageField(blank=True, help_text='Загрузите фото темы', upload_to=apps.base.services.path_theme_image, verbose_name='Фото темы'),
        ),
        migrations.AlterField(
            model_name='themeofwords',
            name='title',
            field=models.CharField(help_text='Введите тему,которая объединяет выбранные слова', max_length=50, verbose_name='Название темы'),
        ),
        migrations.CreateModel(
            name='ENG_KGZ_Words',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('eng_words', models.CharField(help_text='Введите слово на английском языке', max_length=50, verbose_name='Английские слова')),
                ('kgz_words', models.CharField(help_text='Введите слово на кыргызском языке', max_length=50, verbose_name='Киргизские слова')),
                ('theme', models.ForeignKey(help_text='Выберите тему, к которой относятся слова', on_delete=django.db.models.deletion.CASCADE, to='webapp.themeofwords', verbose_name='Тема, к которой относятся слова')),
            ],
            options={
                'verbose_name': 'Англо-киргизские слова',
                'verbose_name_plural': 'Англо-киргизские слова',
            },
        ),
        migrations.CreateModel(
            name='RUS_ENG_Words',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ru_words', models.CharField(help_text='Введите слово на русском языке', max_length=50, verbose_name='Русские слова')),
                ('eng_words', models.CharField(help_text='Введите слово на английском языке', max_length=50, verbose_name='Английские слова')),
                ('theme', models.ForeignKey(help_text='Выберите тему, к которой относятся слова', on_delete=django.db.models.deletion.CASCADE, to='webapp.themeofwords', verbose_name='Тема, к которой относятся слова')),
            ],
            options={
                'verbose_name': 'Русско-английские слова',
                'verbose_name_plural': 'Русско-английские слова',
            },
        ),
        migrations.CreateModel(
            name='RUS_KGZ_Words',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ru_words', models.CharField(help_text='Введите слово на русском языке', max_length=50, verbose_name='Русские слова')),
                ('kgz_words', models.CharField(help_text='Введите слово на кыргизском языке', max_length=50, verbose_name='Киргизские слова')),
                ('theme', models.ForeignKey(help_text='Выберите тему, к которой относятся слова', on_delete=django.db.models.deletion.CASCADE, to='webapp.themeofwords', verbose_name='Тема, к которой относятся слова')),
            ],
            options={
                'verbose_name': 'Русско-киргизские слова',
                'verbose_name_plural': 'Русско-киргизские слова',
            },
        ),
        migrations.DeleteModel(
            name='Words',
        ),
    ]
