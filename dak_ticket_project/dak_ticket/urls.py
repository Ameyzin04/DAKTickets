from django.urls import path
from . import views

urlpatterns = [
    path('events/', views.EventList.as_view(), name='event_list'),
    path('events/<int:pk>/', views.EventDetail.as_view(), name='event_detail'),
    path('venues/', views.VenueList.as_view(), name='venue_list'),
    path('venues/<int:pk>/', views.VenueDetail.as_view(), name='venue_detail'),
]