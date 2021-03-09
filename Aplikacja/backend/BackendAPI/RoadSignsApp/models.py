from django.db import models

# Create your models here.
class RoadSigns(models.Model):
    RoadSignId = models.AutoField(primary_key=True)   
    RoadSignName = models.CharField(max_length=255)   
    RoadSignCategory = models.CharField(max_length=255)
    PhotoFileName = models.CharField(max_length=255)  