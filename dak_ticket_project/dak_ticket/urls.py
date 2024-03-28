from django.urls import path
from . import views 
from .views import user_signup, user_login
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('event/', views.EventList.as_view(), name='event_list'),
    path('event/<int:pk>/', views.EventDetail.as_view(), name='event_detail'),
    path('venue/', views.VenueList.as_view(), name='venue_list'),
    path('venue/<int:pk>/', views.VenueDetail.as_view(), name='venue_detail'),
    path('signup/', user_signup, name='signup'),
    path('login/', user_login, name='login'),
]