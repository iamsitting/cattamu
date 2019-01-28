from django.contrib import admin
from announcements.models import Announcement

# Register your models here.
class AnnouncementAdmin(admin.ModelAdmin):
  list_display = ('pk', 'title', 'priority')

admin.site.register(Announcement, AnnouncementAdmin)
