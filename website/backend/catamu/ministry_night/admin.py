from django.contrib import admin
from ministry_night.models import MinistryNight

# Register your models here.
class MinistryNightAdmin(admin.ModelAdmin):
  list_display = ('pk', 'topic', 'date')

admin.site.register(MinistryNight, MinistryNightAdmin)
