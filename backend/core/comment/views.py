

from comment.models import Review
from rest_framework import viewsets, permissions

from comment.serializers import ReviewSerializer


class ReviewAPIView(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


