from rest_framework import serializers
from .models import Event, Venue

class EventSerializer(serializers.HyperlinkedModelSerializer):
    venue = serializers.HyperlinkedRelatedField(
        view_name='venue_detail',  # Assuming this is the name of your venue detail URL pattern
        many=False,
        read_only=True  # Assuming you don't want to allow writing to the venue field directly
    )

    venue_name = serializers.CharField(
        read_only=True,
        source='venue.name'
    )
    
    event_url = serializers.ModelSerializer.serializer_url_field(
    view_name='event_detail'
    )
    
        
    class Meta:
        model = Event
        fields = ('id', 'name', 'time', 'type', 'duration', 'photo_url','event_url','venue','venue_name')


class VenueSerializer(serializers.HyperlinkedModelSerializer):
    events = EventSerializer(
        # view_name='event_detail',  # Assuming this is the name of your event detail URL pattern
        many=True,
        read_only=True  # Assuming you don't want to allow writing to the event field directly
    )


    class Meta:
        model = Venue
        fields = ('id', 'name', 'address', 'state', 'city', 'zip_code', 'capacity', 'photo_url','events',)