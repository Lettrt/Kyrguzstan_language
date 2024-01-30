from rest_framework import viewsets
from rest_framework import permissions

from .serializers import ThemeSerializer,RUS_ENG_WordsSerializer,RUS_KGZ_WordsSerializer,ENG_KGZ_WordsSerializer
from .models import ThemeOFWords,RUS_ENG_Words,RUS_KGZ_Words,ENG_KGZ_Words


class ThemeAPIView(viewsets.ModelViewSet):
    queryset = ThemeOFWords.objects.all()
    serializer_class = ThemeSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]
    
class RUS_ENG_WordsAPIView(viewsets.ModelViewSet):
    queryset = RUS_ENG_Words.objects.all()
    serializer_class = RUS_ENG_WordsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class RUS_KGZ_WordsAPIView(viewsets.ModelViewSet):
    queryset = RUS_KGZ_Words.objects.all()
    serializer_class = RUS_KGZ_WordsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ENG_KGZ_WordsAPIView(viewsets.ModelViewSet):
    queryset = ENG_KGZ_Words.objects.all()
    serializer_class = ENG_KGZ_WordsSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]