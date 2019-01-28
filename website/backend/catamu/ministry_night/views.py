from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from ministry_night.models import MinistryNight
from ministry_night.serializers import MinistryNightSerializer


@csrf_exempt
def get_ministry_nights(request):
  data = MinistryNight.objects.order_by('date')
  if request.method == 'GET':
    serializer = MinistryNightSerializer(data, many=True)
    return JsonResponse(serializer.data, safe=False)
