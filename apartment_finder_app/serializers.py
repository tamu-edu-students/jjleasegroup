from rest_framework import serializers
from apartment_finder_app.models import QuestionConsultation
from apartment_finder_app.models import Customer


class QuestionConsultationSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionConsultation
        fields = ('question_id', 'question_purpose', 'apt_area', 'question_text', 'question_status',
                  'submission_date_time', 'customer_id')


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('customer_id', 'customer_username', 'customer_password', 'customer_email', 'customer_phone',
                  'customer_gender', 'customer_date_of_birth')
