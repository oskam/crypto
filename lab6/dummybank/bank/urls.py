from django.conf.urls import include, url
from bank import views

urlpatterns = [
    url(r'^transfer', views.transfer, name='transfer'),
    url(r'^preview', views.preview, name='preview'),
    url(r'^confirmation', views.confirmation, name='confirmation'),
    url(r'^history', views.history, name='history'),
    url(r'^', views.main, name='main'),
]
