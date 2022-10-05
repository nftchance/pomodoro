from django.contrib import admin

from .models import Room

@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    list_display = ("room_code", "work_periods", "work_period_duration",
                    "break_period_duration", "long_break_period_duration",
                    "start_time")