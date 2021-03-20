from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import generics
from RoadSignsApp.models import RoadSigns
from RoadSignsApp.serializers import RoadSignSerializer
from django_filters import rest_framework as filters 
from django.core.files.storage import default_storage

# Create your views here.

class roadSignList(generics.ListCreateAPIView):
      queryset=RoadSigns.objects.all()
      serializer_class = RoadSignSerializer

class roadSignAction(generics.RetrieveUpdateDestroyAPIView):
      queryset=RoadSigns.objects.all()
      serializer_class = RoadSignSerializer 
      lookup_fields = 'RoadSignId'     

class roadSignByCategory(generics.ListAPIView):
      queryset = RoadSigns.objects.all()
      serializer_class = RoadSignSerializer
      filter_backends=(filters.DjangoFilterBackend,)
      filterset_fields=('RoadSignCategory',)

@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)
