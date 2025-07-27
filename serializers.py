from rest_framework import serializers
from .models import Product, SaltContent, Review

class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'

class SaltContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = SaltContent
        fields = '__all__'

class ReviewSerializer(serializers.ModelSerializer):
    class Meta:
        model = Review
        fields = '__all__'
