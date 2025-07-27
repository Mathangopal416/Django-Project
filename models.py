from django.db import models

class Product(models.Model):
    name = models.CharField(max_length=255)
    brand = models.CharField(max_length=255)
    dosage = models.CharField(max_length=50)
    price = models.FloatField()
    discount = models.FloatField()
    image_url = models.TextField()

class SaltContent(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    chemical_name = models.CharField(max_length=255)
    formulation = models.CharField(max_length=255)

class Review(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    rating = models.FloatField()
    comment = models.TextField()
