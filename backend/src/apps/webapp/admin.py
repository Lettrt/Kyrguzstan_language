from django.contrib import admin

from .models import ThemeOFWords, RUS_ENG_Words,RUS_KGZ_Words,ENG_KGZ_Words


@admin.register(ThemeOFWords)
class ThemeOFWordsAdmin(admin.ModelAdmin):
    list_display_links = ('title',)
    search_fields = ('title',)
    list_filter = ('title',)
    list_display = ('title','short_description',)   

    def short_description(self, obj):
        return obj.description[:20] 

    short_description.short_description = 'Короткое описание'

    
@admin.register(RUS_ENG_Words)
class WordsAdmin(admin.ModelAdmin):
    list_display = ('theme', 'ru_words', 'eng_words',)
    list_display_links =('theme', 'ru_words', 'eng_words',)
    search_fields = ('theme', 'ru_words', 'eng_words',)
    list_filter = ('theme', 'ru_words', 'eng_words',)

@admin.register(RUS_KGZ_Words)
class WordsAdmin(admin.ModelAdmin):
    list_display = ('theme', 'ru_words', 'kgz_words',)
    list_display_links = ('theme', 'ru_words', 'kgz_words',)
    search_fields = ('theme', 'ru_words', 'kgz_words',)
    list_filter = ('theme', 'ru_words', 'kgz_words',)

@admin.register(ENG_KGZ_Words)
class WordsAdmin(admin.ModelAdmin):
    list_display = ( 'theme','kgz_words','eng_words',)
    list_display_links = ( 'theme','kgz_words','eng_words',)
    search_fields = ( 'theme','kgz_words','eng_words',)
    list_filter = ( 'theme','kgz_words','eng_words',)

