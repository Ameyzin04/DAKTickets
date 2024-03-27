
from django.urls import path
from . import views
from rest_framework.routers import DefaultRouter


urlpatterns = [
    path('event/', views.EventList.as_view(), name='event_list'),
    path('event/<int:pk>/', views.EventDetail.as_view(), name='event_detail'),
    path('venue/', views.VenueList.as_view(), name='venue_list'),
    path('venue/<int:pk>/', views.VenueDetail.as_view(), name='venue_detail'),
    path('login/', views.user_login, name='login'),
    path('signup/', views.user_registration, name='signup'),
    path('logout/', views.user_logout, name='logout'),

]
