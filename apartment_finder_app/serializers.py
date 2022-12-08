from rest_framework import serializers
from apartment_finder_app.models import QuestionConsultation
from apartment_finder_app.models import Customer
from apartment_finder_app.models import ApartmentInfo


class QuestionConsultationSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionConsultation
        fields = ('question_id', 'question_purpose', 'apt_area', 'question_text', 'question_status',
                  'submission_date_time', 'customer_id', 'question_reply')


class CustomerSerializer_full(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('customer_id', 'customer_username', 'customer_password', 'customer_email', 'customer_phone',
                  'customer_gender', 'customer_date_of_birth', 'customer_security_question', 'customer_security_answer')


class CustomerSerializer_update(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('customer_id', 'customer_username', 'customer_email', 'customer_phone',
                  'customer_gender', 'customer_date_of_birth', 'customer_security_question', 'customer_security_answer')


class CustomerSerializer_pwd(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('customer_id', 'customer_password')


class ApartmentInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = ApartmentInfo
        fields = ('apt_id', 'apt_name', 'apt_city', 'apt_street', 'apt_zipcode',
                  'apt_price_low', 'apt_price_high', 'apt_tag_near_campus', 'apt_tag_furnished', 'apt_tag_free_parking',
                  'apt_tag_free_we', 'apt_tag_free_internet', 'apt_url', 'apt_picture_url')
