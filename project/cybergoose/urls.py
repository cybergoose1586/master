
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^cybergoose', views.start_page, name='start_page'),
    url(r'^feedback$', views.feedback, name='feedback'),
    url(r'^enter', views.enter, name='enter'),
    url(r'^enter/error$', views.error, name='error'),
    url(r'^enter/reg$', views.registration, name='registration'),
    url(r'^reg$', views.registration, name='registration'),
    url(r'^aboutus$', views.about_us, name='about_us'),
    url(r'^enter/reg/visual/', views.visualization, name='visualization'),
    url(r'^enter/visual/', views.visualization, name='visualization'),
    url(r'^visual/', views.visualization, name='visualization'),
    url(r'^headap', views.HeaderUpdate, name='HeaderUpdate'),
]