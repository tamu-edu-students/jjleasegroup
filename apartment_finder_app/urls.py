<<<<<<< HEAD
'''
from django.conf.urls import url
=======
from django.urls import re_path as url
>>>>>>> 95ee304ddb32c48abfb6e78d2de9cd73d0eff43b
from apartment_finder_app import views

urlpatterns = [
    url(r'^question_consultation$', views.question_consultation_API, name='add-question-consultation'),
    url(r'^question_consultation/([0-9]+)$', views.question_consultation_API, name='retrieve_question_consultation')
<<<<<<< HEAD
]
'''
=======
]
>>>>>>> 95ee304ddb32c48abfb6e78d2de9cd73d0eff43b
