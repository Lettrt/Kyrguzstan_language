from .models import Review
from rest_framework import serializers


class ReviewSerializer(serializers.ModelSerializer):
    themes = serializers.StringRelatedField()
    name = serializers.StringRelatedField()

    class Meta:
        model = Review
        fields =['themes', 'name', 'body']
    