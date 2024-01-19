from rest_framework.viewsets import ModelViewSet

from rest_framework.permissions import IsAuthenticated

from rest_framework.filters import OrderingFilter
from django_filters.rest_framework import DjangoFilterBackend

from rating.models import Rating
from rating.serializers import RatingSerializer


class RatingView(ModelViewSet):
    queryset = Rating.objects.all()
    serializer_class = RatingSerializer
    permission_classes = (IsAuthenticated,)
    filter_backends = (OrderingFilter, DjangoFilterBackend)
    filterset_fields = ('stars',)
    ordering_fields = ('created_at',)
