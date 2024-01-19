from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'users', views.UserRULD)

urlpatterns = [
    path('registration/', views.registration, name='registration'),
    path('authentication/', views.authentication, name='user_auth'),
    path('logout/', views.logout_user, name='user_exit'),
    path('', include(router.urls)),
]
