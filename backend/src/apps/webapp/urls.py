from django.urls import path, include
from rest_framework.routers import DefaultRouter

from .views import ThemeAPIView,RUS_ENG_WordsAPIView,RUS_KGZ_WordsAPIView,ENG_KGZ_WordsAPIView

router = DefaultRouter()
router.register(r'themes', ThemeAPIView)
router.register(r'rus_eng_words', RUS_ENG_WordsAPIView)
router.register(r'rus_kgz_words', RUS_KGZ_WordsAPIView)
router.register(r'eng_kgz_words', ENG_KGZ_WordsAPIView)

urlpatterns = [
    path('', include(router.urls)),
]
