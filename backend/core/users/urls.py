from django.urls import path

from . import views


urlpatterns = [
    path('registration/', views.registration, name='registration'),
    path('user_auth/', views.user_auth, name='user_auth'),
    path('user_exit/', views.user_exit, name='user_exit'),
]
