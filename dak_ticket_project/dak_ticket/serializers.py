from rest_framework import serializers
from .models import Event, Venue 

class EventSerializer(serializers.HyperlinkedModelSerializer):
    venue = serializers.HyperlinkedRelatedField(
        view_name='venue_detail',  
        many=False,
        read_only=True  
    )
    
    class Meta:
        model = Event
        fields = '__all__'

class VenueSerializer(serializers.HyperlinkedModelSerializer):
    events = serializers.HyperlinkedRelatedField(
        view_name='event_detail', 
        many=True,
        read_only=True  
    )

    class Meta:
        model = Venue
        fields = '__all__'