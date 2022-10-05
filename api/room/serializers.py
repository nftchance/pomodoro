from rest_framework import serializers

from .models import Room

class RoomSerializer(serializers.ModelSerializer):
    id = serializers.ReadOnlyField()
    room_code = serializers.ReadOnlyField()

    class Meta:
        model = Room
        fields = (
            'id',
            'room_code',
            'work_periods',
            'work_period_duration',
            'break_period_duration',
            'long_break_period_duration',
            'start_time',
        )