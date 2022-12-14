# Generated by Django 4.1.2 on 2022-10-05 00:03

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = []

    operations = [
        migrations.CreateModel(
            name="Room",
            fields=[
                (
                    "id",
                    models.BigAutoField(
                        auto_created=True,
                        primary_key=True,
                        serialize=False,
                        verbose_name="ID",
                    ),
                ),
                ("room_code", models.CharField(max_length=8)),
                ("work_periods", models.IntegerField(default=4)),
                ("work_period_duration", models.IntegerField(default=25)),
                ("break_period_duration", models.IntegerField(default=5)),
                ("long_break_period_duration", models.IntegerField(default=15)),
                ("start_time", models.DateTimeField(blank=True, null=True)),
            ],
        ),
    ]
