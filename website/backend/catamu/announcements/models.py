from django.db import models

# Create your models here.
class Announcement(models.Model):
  title = models.CharField(max_length=200)
  subtitle = models.CharField(max_length=200)
  info_link = models.CharField(max_length=5000)
  background_link = models.CharField(max_length=5000)
  priority = models.PositiveSmallIntegerField()
