from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('registration', views.registration, name='registration'),
    path('service', views.service, name='service'),
    path('sliderService', views.sliderService, name='sliderService'),
    path('community', views.community, name='community'),
]
