from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import include, path, re_path
from django.views.static import serve
from drf_yasg.views import get_schema_view
from drf_yasg import openapi
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView, TokenVerifyView

from .views import welcome_view

schema_view = get_schema_view(
    openapi.Info(
        title='API Documentation',
        default_version='v1',
        description='API for Kyrgyzstan language project',
        terms_of_service='Not now',
        contact=openapi.Contact(email='email@email.com'),
        license=openapi.License(name='IT Academy Lab'),
    ),
    public=True,
)

urlpatterns = [
    # Swagger
    path('swagger/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
    # Admin
    path('admin/', admin.site.urls),
    # Welcome
    path('', welcome_view, name='welcome'),
    # User
    path('api/user/', include('users.urls')),
    # Token
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pari'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('api/token/verify/', TokenVerifyView.as_view(), name='token_verify'),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += [re_path(r'^media/(?P<path>.*)$', serve, {'document_root': settings.MEDIA_ROOT,}),]
