from rest_framework import serializers
from apartment_finder_app.models import QuestionConsultation


class QuestionConsultationSerializer(serializers.ModelSerializer):
    class Meta:
        model = QuestionConsultation
        fields = ('question_id', 'question_purpose', 'apt_area', 'question_text', 'question_status',
                  'submission_date_time', 'customer_id')
