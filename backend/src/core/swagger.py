from drf_yasg import openapi
from drf_yasg.views import get_schema_view

from rest_framework import permissions


schema_view = get_schema_view(
    openapi.Info(
        title='API Documentation',
        default_version='v1',
        description='API for dds project',
        terms_of_service='Not now',
        contact=openapi.Contact(email='email@email.com'),
        license=openapi.License(name='BSD License'),
    ),
    public=True,
    permission_classes=[permissions.AllowAny]
)
