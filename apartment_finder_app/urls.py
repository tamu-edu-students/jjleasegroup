# from django.conf.urls import url
from django.urls import re_path as url
from apartment_finder_app import views
from django.urls import path

urlpatterns = [
    url(r'^login', views.login, name='login'),
    path('image/code/', views.image_code),
    url(r'^change_password', views.change_password, name='change-password'),
    url(r'^get_back_password', views.get_back_password, name='get_back_password'),
    url(r'^get_question_text', views.get_question_text, name='get_question_text'),
    url(r'^question_consultation$', views.question_consultation_API, name='add_question_consultation'),
    url(r'^question_consultation/([0-9]+)$', views.question_consultation_API, name='retrieve_question_consultation'),
    url(r'^customer$', views.customer_API, name='customer'),
    url(r'^customer/([0-9]+)$', views.customer_API, name='remove_customer')
]