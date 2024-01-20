from rest_framework import serializers

from webapp.models import ThemeOFWords,Words
from base.services import delete_of_file


class WordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Words
        fields = ('id', 'kg_words', 'ru_words', 'eng_words')


class ThemeSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(required=False)
    
    class Meta:
        model = ThemeOFWords
        fields = ('id', 'title', 'description', 'image', 'words')

    def update(self, instance, validated_data):
        # Удаление файла после обновления
        try:
            delete_of_file(instance.image.path)
        except ValueError:
            pass
        return super().update(instance, validated_data)
