from django.test import TestCase

from .models import Room

class RoomTestCase(TestCase):
    def test_room_code_on_create(self):
        room = Room.objects.create()
        self.assertIsNotNone(room.room_code)