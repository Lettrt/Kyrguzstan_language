
from webapp.models import ThemeOFWords, Words
from rest_framework import viewsets

from webapp.serializers import ThemeSerializer, WordsSerializer



class ThemeAPIView(viewsets.ModelViewSet):
    queryset = ThemeOFWords.objects.all()
    serializer_class = ThemeSerializer
    

class WordsAPIView(viewsets.ModelViewSet):
    queryset = Words.objects.all()
    serializer_class = WordsSerializer