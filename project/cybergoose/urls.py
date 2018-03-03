
from django.conf.urls import url
from . import views
from django.contrib.auth.views import login

urlpatterns = [
    url(r'^cybergoose', views.start_page, name='test'),
    url(r'^feedback$', views.feedback, name='feedback'),
    url(r'^enter', views.login, name='enter'),
    url(r'^enter/error$', views.error, name='error'),
    url(r'^reg$', views.registration, name='registration'),
    url(r'^aboutus$', views.about_us, name='about_us'),
    url(r'^visual/', views.visualization, name='visualization'),
    url(r'^headap', views.HeaderUpdate, name='HeaderUpdate'),
    
]