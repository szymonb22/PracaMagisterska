from django.conf.urls import url
from RoadSignsApp import views
from RoadSignsApp.models import RoadSigns

from django.conf.urls.static import static
from django.conf import settings


urlpatterns=[
    url(r'^roadSign/$',views.roadSignList.as_view()),
    url(r'^roadSign/(?P<pk>[0-9]+)$',views.roadSignAction.as_view()),
    url(r'^roadSign/category/$',views.roadSignByCategory.as_view()),
    url(r'^SaveFile$',views.SaveFile)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)