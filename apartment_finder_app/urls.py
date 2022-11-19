# from django.conf.urls import url
from django.urls import re_path as url
from apartment_finder_app import views
from django.urls import path

urlpatterns = [
    url(r'^customer_login', views.customer_login, name='customer_login'),
    url(r'^admin_login', views.admin_login, name='admin_login'),
    path('image/code/', views.image_code),
    url(r'^change_password', views.change_password, name='change_password'),
    url(r'^get_back_password', views.get_back_password, name='get_back_password'),
    url(r'^get_question_text', views.get_question_text, name='get_question_text'),
    url(r'^question_consultation$', views.question_consultation_API, name='add_question_consultation'),
    url(r'^question_consultation/([0-9]+)$', views.question_consultation_API, name='retrieve_question_consultation'),
    url(r'^customer$', views.customer_API, name='post/put_customer'),
    url(r'^customer/([0-9]+)$', views.customer_API, name='get/delete_customer'),
    url(r'^apt_info$', views.apt_info_api, name='get_post_apt'),
    url(r'^apt_info/([0-9]+)$', views.apt_info_api, name='delete_apt'),
]