from django.conf.urls import url
from RoadSignsApp import views

from django.conf.urls.static import static
from django.conf import settings

urlpatterns=[
    url(r'^roadSign/$',views.roadSignsApi),
    url(r'^roadSign/([0-9]+)$',views.roadSignsApi),
    url(r'^SaveFile$',views.SaveFile)
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)