from django.db import models

# Create your models here.
class MinistryNight(models.Model):
  date = models.DateField(blank=True)
  topic = models.CharField(max_length=200)
  download_link = models.CharField(max_length=5000)
