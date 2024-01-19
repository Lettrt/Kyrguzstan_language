from django.contrib import admin

from webapp.models import ThemeOFWords, Words


@admin.register(ThemeOFWords)
class ThemeOFWordsAdmin(admin.ModelAdmin):
    list_display_links = ('title',)
    search_fields = ('title',)
    list_filter = ('title',)
    list_display = ('title','short_description',)   


    def short_description(self, obj):
        return obj.description[:20] 

    short_description.short_description = 'Короткое описание'

    
@admin.register(Words)
class WordsAdmin(admin.ModelAdmin):
    list_display = ('kg_words', 'ru_words', 'eng_words',)
    list_display_links = ('kg_words', 'ru_words', 'eng_words',)
    search_fields = ('kg_words', 'ru_words', 'eng_words',)
    list_filter = ('kg_words', 'ru_words', 'eng_words',)
