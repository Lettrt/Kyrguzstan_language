from django.urls import path, include
from rest_framework.routers import DefaultRouter

from views import ThemeAPIView, WordsAPIView

router = DefaultRouter()
router.register(r'themes', ThemeAPIView)
router.register(r'words', WordsAPIView)

urlpatterns = [
    path('', include(router.urls)),
]
