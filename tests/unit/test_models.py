from django.test import TestCase
from apartment_finder_app.models import QuestionConsultation
from datetime import datetime

class QuestionConsultationTestCase(TestCase):
    @classmethod
    def set_up_test_data(self):
        QuestionConsultation.objects.create(question_id=1, question_purpose=1, apt_area=0, question_text='test',
                                            question_status=0,
                                            submission_date_time=datetime(2015, 10, 9, 23, 55, 59, 342380),
                                            customer_id=23)

    def test_question_id(self):
        question = QuestionConsultation.objects.get(id=1)
        field_label = question._meta.get_field('question_id').verbose_name
        self.assertEqual(field_label, 'question_id')

    def test_question_purpose(self):
        question = QuestionConsultation.objects.get(id=1)
        field_label = question._meta.get_field('question_purpose').verbose_name
        self.assertEqual(field_label, 'question_purpose')