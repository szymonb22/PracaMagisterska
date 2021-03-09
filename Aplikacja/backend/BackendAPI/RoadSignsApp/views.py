from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse

from RoadSignsApp.models import RoadSigns
from RoadSignsApp.serializers import RoadSignSerializer

from django.core.files.storage import default_storage

# Create your views here.
@csrf_exempt
def roadSignsApi(request,id=0):
    if request.method =='GET':
       roadsigns = RoadSigns.objects.all()
       roadsigns_serializer = RoadSignSerializer(roadsigns,many = True)
       return JsonResponse(roadsigns_serializer.data, safe=False)
    
    elif request.method=='POST':
        roadsign_data = JSONParser().parse(request)
        roadsign_serializer = RoadSignSerializer(data=roadsign_data)
        if roadsign_serializer.is_valid():
            roadsign_serializer.save()
            return JsonResponse("added Successfully!!!",safe=False)
        return JsonResponse("Failed to add!",safe=False)
    
    elif request.method=='PUT':
        roadsign_data = JSONParser().parse(request)
        roadsign=RoadSigns.objects.get(RoadSignId=roadsign_data['RoadSignId'])    
        roadsign_serializer = RoadSignSerializer(roadsign,data=roadsign_data)
        if roadsign_serializer.is_valid():
            roadsign_serializer.save()
            return JsonResponse("Updated Successfully!!!",safe=False)
        return JsonResponse("Failed to Update!",safe=False)

    elif request.method =="DELETE":
        roadsign = RoadSigns.objects.get(RoadSignId=id)
        roadsign.delete()
        return JsonResponse("Deleted SuccessFully!!!",safe=False)

@csrf_exempt
def SaveFile(request):
    file=request.FILES['uploadedFile']
    file_name = default_storage.save(file.name,file)

    return JsonResponse(file_name,safe=False)
