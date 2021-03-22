from django.conf.urls import url
from RoadSignsApp import views
from RoadSignsApp.models import RoadSigns
from django.urls import include, path
from django.conf.urls.static import static
from django.conf import settings
from rest_framework import routers
from rest_framework.authtoken.views import ObtainAuthToken
router = routers.DefaultRouter()
# router.register(r'users', views.newUser.as_view())
router.register(r'groups', views.GroupViewSet)


urlpatterns = [
    url(r'^roadSign/$', views.roadSignList.as_view()),
    url(r'^roadSign/(?P<pk>[0-9]+)$', views.roadSignAction.as_view()),
    url(r'^roadSign/category/$', views.roadSignByCategory.as_view()),
    url(r'^SaveFile$', views.SaveFile),
    url('', include(router.urls)),
    url(r'users', views.newUser.as_view()),
    url(r'users/(?P<pk>[0-9]+)$', views.UserDetails.as_view()),
    

]+static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
