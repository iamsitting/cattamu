from ministry_night.models import MinistryNight
from rest_framework import serializers


class MinistryNightSerializer(serializers.ModelSerializer):
  class Meta:
    model = MinistryNight
    fields = ('date', 'topic', 'download_link')
