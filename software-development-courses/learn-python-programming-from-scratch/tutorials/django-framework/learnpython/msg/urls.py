from django.conf.urls import re_path, url
from . import views

urlpatterns = re_path(r'^$', views.index, name="index"),
