from django.urls import path, include
from rest_framework.routers import DefaultRouter

from rating.views import RatingView

router = DefaultRouter()
router.register('rating', RatingView)

urlpattern = [
]

urlpattern =+ router.urls