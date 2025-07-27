from rest_framework import viewsets
from .models import Product, SaltContent, Review
from .serializers import ProductSerializer, SaltContentSerializer, ReviewSerializer

class ProductViewSet(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer

class SaltContentViewSet(viewsets.ModelViewSet):
    queryset = SaltContent.objects.all()
    serializer_class = SaltContentSerializer

class ReviewViewSet(viewsets.ModelViewSet):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
