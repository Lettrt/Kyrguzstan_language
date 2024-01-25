from rest_framework import viewsets
from rest_framework import permissions

from .serializers import ThemeSerializer, WordsSerializer
from .models import ThemeOFWords, Words


class ThemeAPIView(viewsets.ModelViewSet):
    queryset = ThemeOFWords.objects.all()
    serializer_class = ThemeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    

class WordsAPIView(viewsets.ModelViewSet):
    queryset = Words.objects.all()
    serializer_class = WordsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
