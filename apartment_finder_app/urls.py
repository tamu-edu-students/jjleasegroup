# from django.conf.urls import url
from django.urls import re_path as url
from apartment_finder_app import views
from django.urls import path

urlpatterns = [
    url(r'^login', views.login, name='login'),
    path('image/code/', views.image_code),
    url(r'^change_password', views.change_password, name='change-password'),
    url(r'^question_consultation$', views.question_consultation_API, name='add_question_consultation'),
    url(r'^question_consultation/([0-9]+)$', views.question_consultation_API, name='retrieve_question_consultation'),
    url(r'^customer$', views.customer_API, name='customer'),
    url(r'^customer/([0-9]+)$', views.customer_API, name='remove_customer')
]