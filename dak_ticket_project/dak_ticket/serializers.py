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
        fields = ('id', 'name', 'time', 'type', 'duration', 'photo_url', )

class VenueSerializer(serializers.HyperlinkedModelSerializer):
    event = serializers.HyperlinkedRelatedField(
        view_name='event_detail', 
        many=True,
        read_only=True  
    )

    class Meta:
        model = Venue
        fields = ('id', 'name', 'address', 'state', 'city', 'zip', 'capacity', 'photo_url')


