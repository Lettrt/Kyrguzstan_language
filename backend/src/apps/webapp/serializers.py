from rest_framework import serializers

from .models import ThemeOFWords, RUS_ENG_Words, RUS_KGZ_Words, ENG_KGZ_Words
from ..base.services import delete_of_file


class RUS_ENG_WordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = RUS_ENG_Words
        fields = '__all__'

class RUS_KGZ_WordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = RUS_KGZ_Words,
        fields = '__all__'

class ENG_KGZ_WordsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ENG_KGZ_Words
        fields = '__all__'


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
