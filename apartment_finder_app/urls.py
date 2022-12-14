# from django.conf.urls import url
from django.urls import re_path as url
from apartment_finder_app import views
from django.urls import path

urlpatterns = [
    url(r'^customer_login', views.customer_login, name='customer_login'),
    url(r'^admin_login', views.admin_login, name='admin_login'),
    url(r'^image_code', views.image_code, name='admin_login'),
    url(r'^change_password', views.change_password, name='change_password'),
    url(r'^get_back_password', views.get_back_password, name='get_back_password'),
    url(r'^get_question_text', views.get_question_text, name='get_question_text'),
    url(r'^question_consultation$', views.question_consultation_API, name='add_question_consultation'),
    url(r'^question_consultation/all$', views.question_consultation_API, name='retrieve_question_consultation_all'),
    url(r'^question_consultation/question=([0-9]+)$', views.question_consultation_API,
        name='update/retrieve_question_consultation_by_question'),
    url(r'^question_consultation/customer=([0-9]+)$', views.question_consultation_API,
        name='retrieve_question_consultation_by_customer'),
    url(r'^customer$', views.customer_API, name='post/put_customer'),
    url(r'^customer/id=([0-9]+)$', views.customer_API, name='get/delete_customer'),
    url(r'^customer/email=([a-zA-Z-\.0-9@]+)$', views.customer_API, name='get_customer_by_email'),
    url(r'^apt_info$', views.apt_info_api, name='get_post_apt'),
    url(r'^apt_info/([0-9]+)$', views.apt_info_api, name='delete_apt'),
    url(r'^search_apt', views.apt_search, name='search_apt')
]