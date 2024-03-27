from django.db import models

class Venue(models.Model):
    name = models.CharField(max_length=100)
    address = models.CharField(max_length=100)
    state = models.CharField(max_length=100)
    city = models.CharField(max_length=100)
    zip_code = models.CharField(max_length=100)
    capacity = models.IntegerField()
    photo_url = models.URLField()

    def __str__(self):
        return self.name

class Event(models.Model):
    EVENT_TYPES = [
        ('sports', 'Sports'),
        ('concerts', 'Concerts'),
    ]
    name = models.CharField(max_length=100)
    time = models.CharField(max_length=100)
    event_type = models.CharField(max_length=100, choices=EVENT_TYPES)
    duration = models.CharField(max_length=100)
    photo_url = models.URLField()
    venue = models.ForeignKey(Venue, on_delete=models.CASCADE)
    description = models.CharField(max_length=100, default='')
    
    def __str__(self):
        return self.name