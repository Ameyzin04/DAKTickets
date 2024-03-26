

# Register your models here.
from django.contrib import admin
from .models import Event, Venue,CustomUser

admin.site.register(Event)
admin.site.register(Venue)
admin.site.register(CustomUser)