import pytest
from django.contrib.auth import get_user_model
from rest_framework.test import APIClient

User = get_user_model()

@pytest.fixture
def api_client() -> APIClient:
    return APIClient()

@pytest.fixture
def api_user() -> User:
    return User.objects.create_user(username='testuser', password='Test1234__/')
