from announcements.models import Announcement
from announcements.serializers import AnnouncementSerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def get_announcements(request):
  data = Announcement.objects.order_by('priority')
  if request.method == 'GET':
    serializer = AnnouncementSerializer(data, many=True)
    return JsonResponse(serializer.data, safe=False)
