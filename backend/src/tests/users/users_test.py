import pytest
from django.contrib.auth.models import User
from rest_framework.reverse import reverse
from rest_framework.test import APIClient
from rest_framework_simplejwt.tokens import RefreshToken

@pytest.mark.django_db
def test_user_registration(api_client: APIClient):
    user_data = {
        "username": "testuser",
        "password": "Test1234__/",
        "password2": "Test1234__/",
        "email": "test@gmail.com"
    }
    url = reverse('registration')

    response = api_client.post(url, data=user_data, format="json")
    assert response.status_code == 201
    assert response.data.get('user', {}).get('username') == user_data['username']

@pytest.mark.django_db
def test_user_login(api_client: APIClient, api_user: User):
    user_data = {
        "username": "testuser",
        "password": "Test1234__/"
    }
    url = reverse('user_auth')

    response = api_client.post(url, data=user_data, format="json")
    assert response.status_code == 201
    assert response.data.get('user', {}).get('username') == api_user.username


@pytest.mark.django_db
def test_user_logout(api_client: APIClient, api_user: User):
    token = RefreshToken.for_user(api_user)
    user_data = {
        "refresh": str(token)
    }
    url = reverse("user_exit")
    headers = {"Authorization": f"Bearer {token.access_token}"}

    response = api_client.post(url, data=user_data, headers=headers, format="json")
    response_not_valid = api_client.post(url, data=user_data, headers=headers, format="json")
    assert response.status_code == 205
    assert response_not_valid.status_code == 400
