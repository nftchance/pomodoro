import django
import string
import random

from django.db import models

ROOM_CODE_LENGTH = 8

class Room(models.Model):
    def save(self, *args, **kwargs):
        if not self.start_time:
            self.start_time = django.utils.timezone.now()

        if not self.room_code:
            self.room_code = self.generate_unique_code()

        super().save(*args, **kwargs)

    room_code = models.CharField(max_length=8)

    work_periods = models.IntegerField(default=4)
    work_period_duration = models.IntegerField(default=25)
    break_period_duration = models.IntegerField(default=5)
    long_break_period_duration = models.IntegerField(default=15)

    start_time = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return self.room_code

    def generate_unique_code(self):
        while True:
            room_code = ''.join(random.choices(
                string.ascii_uppercase, k=ROOM_CODE_LENGTH))
            if Room.objects.filter(room_code=room_code).count() == 0:
                break

        return room_code
