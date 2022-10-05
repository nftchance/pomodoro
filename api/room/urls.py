from rest_framework import routers

from .views import RoomViewSet

router = routers.DefaultRouter()
router.register(r'room', RoomViewSet)

urlpatterns = router.urls