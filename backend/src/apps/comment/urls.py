from django.urls import path, include
from rest_framework.routers import DefaultRouter

from comment.views import ReviewAPIView

router = DefaultRouter()
router.register(r'reviews', ReviewAPIView)


urlpatterns = [
    path('', include(router.urls)),
]
