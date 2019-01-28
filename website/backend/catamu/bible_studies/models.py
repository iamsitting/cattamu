from django.db import models

# Create your models here.
class BibleStudy(models.Model):
  date = models.DateField(blank=True)
  location = models.CharField(max_length=200)
  topic = models.CharField(max_length=200)
  download_link = models.CharField(max_length=5000)
