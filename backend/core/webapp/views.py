from rest_framework import viewsets
from rest_framework import permissions

from webapp.serializers import ThemeSerializer, WordsSerializer
from webapp.models import ThemeOFWords, Words


class ThemeAPIView(viewsets.ModelViewSet):
    queryset = ThemeOFWords.objects.all()
    serializer_class = ThemeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    

class WordsAPIView(viewsets.ModelViewSet):
    queryset = Words.objects.all()
    serializer_class = WordsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
