from django.contrib import admin
from bible_studies.models import BibleStudy

# Register your models here.
class BibleStudyAdmin(admin.ModelAdmin):
  list_display = ('pk', 'topic', 'date')

admin.site.register(BibleStudy, BibleStudyAdmin)
