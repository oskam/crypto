from django.conf.urls import include, url
from administration import views

urlpatterns = [
    url(r'^approve-all/$', views.approve_all, name='approve_all'),
]
