"""apartment_finder URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/3.2/topics/http/urls/
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
from django.contrib import admin
from django.urls import path
<<<<<<< HEAD
=======
from django.urls import re_path as url
from apartment_finder_app import views

>>>>>>> 95ee304ddb32c48abfb6e78d2de9cd73d0eff43b
from django.conf.urls import include

urlpatterns = [
    path('admin/', admin.site.urls),
<<<<<<< HEAD
=======
    path('login/', views.login),
    path('image/code/', views.image_code),
    path('changepwd/', views.change_password),
    url(r'^question_consultation$', views.question_consultation_API, name='add-question-consultation'),
>>>>>>> 95ee304ddb32c48abfb6e78d2de9cd73d0eff43b
    # url(r'^', include('apartment_finder_app.urls'))
]
