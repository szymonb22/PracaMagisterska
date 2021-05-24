from django.contrib import admin
from django.urls import path
from rest_framework_simplejwt.views import TokenRefreshView
from rest_framework_simplejwt.views import TokenObtainPairView
from django.conf.urls import url, include
urlpatterns = [
    path('admin/', admin.site.urls),
    path(r'api-token-auth/',
         TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path(r'api-token-refresh/',
         TokenRefreshView.as_view(), name='token_refresh'),
    url(r'^', include('RoadSignsApp.urls'))

]
