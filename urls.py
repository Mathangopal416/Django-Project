from django.contrib import admin
from django.urls import path, include
from rest_framework import routers
from products.views import ProductViewSet, SaltContentViewSet, ReviewViewSet

router = routers.DefaultRouter()
router.register('products', ProductViewSet)
router.register('salts', SaltContentViewSet)
router.register('reviews', ReviewViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
]
