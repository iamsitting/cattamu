from bible_studies.models import BibleStudy
from rest_framework import serializers


class BibleStudySerializer(serializers.ModelSerializer):
  class Meta:
    model = BibleStudy
    fields = ('date', 'location', 'topic', 'download_link')
