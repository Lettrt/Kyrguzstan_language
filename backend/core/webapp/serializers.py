from rest_framework import serializers
from webapp.models import ThemeOFWords,Words



class ThemeSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = ThemeOFWords
        fields = ('title', 'description', 'image', 'words')


class WordsSerializer(serializers.ModelSerializer):
    
    class Meta:
        model = Words
        fields = ('kg_words', 'ru_words', 'eng_words')