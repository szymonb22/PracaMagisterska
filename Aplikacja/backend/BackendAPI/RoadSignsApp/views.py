from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import generics, permissions, viewsets
from RoadSignsApp.models import RoadSigns
from RoadSignsApp.serializers import RoadSignSerializer, UserSerializer, GroupSerializer,RegisterSerializer
from django_filters import rest_framework as filters
from django.core.files.storage import default_storage
from rest_framework.filters import OrderingFilter
from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework_simplejwt.authentication import JWTAuthentication
from django.contrib.auth.models import User, Group


class roadSignList(generics.ListCreateAPIView):
    permissions_classes = [permissions.IsAuthenticated]
    authentication_classes = [SessionAuthentication,
                              BasicAuthentication, JWTAuthentication]
    queryset = RoadSigns.objects.all()
    # .order_by('-RoadSignName')
    serializer_class = RoadSignSerializer
    ordering_fields = ('RoadSignName',)
    ordering = ('-RoadSignName',)

class roadSignAction(generics.RetrieveUpdateDestroyAPIView):
    queryset = RoadSigns.objects.all()
    serializer_class = RoadSignSerializer
    lookup_fields = 'RoadSignId'
    permissions_classes = [permissions.IsAuthenticated]


class roadSignByCategory(generics.ListAPIView):
    queryset = RoadSigns.objects.all()
    serializer_class = RoadSignSerializer
    filter_backends = (filters.DjangoFilterBackend,)
    filterset_fields = ('RoadSignCategory',)
    permissions_classes = [permissions.IsAuthenticated]

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
    serializer_class = RegisterSerializer
    permissions_classes = [permissions.AllowAny]

class UserDetails(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]
