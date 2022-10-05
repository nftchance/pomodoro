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

    def _build_period(self, type, start_time, duration):
        duration_delta = django.utils.timezone.timedelta(minutes=duration)
        return {
                'type': type,
                'duration': duration,
                'start': start_time,
                'end': start_time + duration_delta
            }, start_time + duration_delta

    @property
    def periods(self):
        # TODO: Pick back up here to implement a real-time building of the pmodoro periods given this configuration
        _periods = {}

        start = self.start_time

        # build dictionary with timestamps of starts as the keys of the dictionary
        for i in range(self.work_periods):
            work_period, start = self._build_period('work', start, self.work_period_duration)
            _periods[str(work_period['start'])] = work_period

            if i < self.work_periods - 1:
                break_period, start = self._build_period('short_break', start, self.break_period_duration)
                _periods[str(break_period['start'])] = break_period 

        # add the long break period
        long_break_period, start = self._build_period('long_break', start, self.long_break_period_duration)
        _periods[str(long_break_period['start'])] = long_break_period

        return _periods

    def generate_unique_code(self):
        while True:
            room_code=''.join(random.choices(
                string.ascii_uppercase, k=ROOM_CODE_LENGTH))
            if Room.objects.filter(room_code=room_code).count() == 0:
                break

        return room_code
