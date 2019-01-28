from bible_studies.models import BibleStudy
from bible_studies.serializers import BibleStudySerializer
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt


@csrf_exempt
def get_bible_studies(request):
  data = BibleStudy.objects.order_by('date')
  if request.method == 'GET':
    serializer = BibleStudySerializer(data, many=True)
    return JsonResponse(serializer.data, safe=False)
