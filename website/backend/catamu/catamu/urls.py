"""catamu URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from announcements.views import get_announcements
from bible_studies.views import get_bible_studies
from django.conf.urls import url
from django.contrib import admin
from django.urls import path
from django.views.generic.base import TemplateView
from ministry_night.views import get_ministry_nights

urlpatterns = [
  # admin
  path('admin/', admin.site.urls),

  # api
  url(r'^api/bible-studies/$', get_bible_studies),
  url(r'^api/announcements/$', get_announcements),
  url(r'^api/ministry-nights/$', get_ministry_nights),

  # catch al;, this should be at the end
  url(r'^$', TemplateView.as_view(template_name="home.html"), name="home"),
]
