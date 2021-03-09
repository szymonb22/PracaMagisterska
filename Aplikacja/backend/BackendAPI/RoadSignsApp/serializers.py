from rest_framework import serializers
from RoadSignsApp.models import RoadSigns

class RoadSignSerializer(serializers.ModelSerializer):
    class Meta:
        model = RoadSigns
        fields = (  'RoadSignId', 
                    'RoadSignName',
                    'RoadSignCategory',
                    'PhotoFileName')
                                  