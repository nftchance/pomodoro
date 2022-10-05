from rest_framework import viewsets
from rest_framework.permissions import (
    IsAuthenticated,
    AllowAny
)

from .models import Room
from .serializers import RoomSerializer

class RoomViewSet(viewsets.ModelViewSet):
    lookup_field = 'room_code'
    lookup_url_kwarg = "room_code"

    queryset = Room.objects.all()
    serializer_class = RoomSerializer

    def get_permissions(self):
        if self.action in ['create', 'list', 'retrieve']:
            permission_classes = [AllowAny]
        else:
            permission_classes = [IsAuthenticated]

        return [permission() for permission in permission_classes]