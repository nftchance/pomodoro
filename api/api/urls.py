from rest_framework import routers

from django.contrib import admin
from django.urls import include, path

from room.urls import router as room_router

router = routers.DefaultRouter()
router.registry.extend(room_router.registry)

urlpatterns = router.urls + [
    path("admin/", admin.site.urls),
    path('api-auth/', include('rest_framework.urls'))
]
