from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import generics,permissions,viewsets
from RoadSignsApp.models import RoadSigns
from RoadSignsApp.serializers import RoadSignSerializer, UserSerializer, GroupSerializer
from django_filters import rest_framework as filters
from django.core.files.storage import default_storage
from rest_framework.filters import OrderingFilter
from rest_framework.authentication import TokenAuthentication
from rest_framework.permissions import IsAuthenticated
from django.contrib.auth.models import User, Group



# Create your views here.

class roadSignList(generics.ListCreateAPIView):
    queryset = RoadSigns.objects.all().order_by('-RoadSignName')
    serializer_class = RoadSignSerializer
    authentication_classes = (TokenAuthentication,)
    permission_classes =(IsAuthenticated,)

class roadSignAction(generics.RetrieveUpdateDestroyAPIView):
    queryset = RoadSigns.objects.all()
    serializer_class = RoadSignSerializer
    lookup_fields = 'RoadSignId'


class roadSignByCategory(generics.ListAPIView):
    queryset = RoadSigns.objects.all()
    serializer_class = RoadSignSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('RoadSignCategory',)

# class roadSignList(generics.ListAPIView):
#       queryset=RoadSigns.objects.all()
#       serializer_class = RoadSignSerializer


@csrf_exempt
def SaveFile(request):
    file = request.FILES['uploadedFile']
    file_name = default_storage.save(file.name, file)

    return JsonResponse(file_name, safe=False)


class newUser(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetails(generics.RetrieveUpdateDestroyAPIView):

    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
