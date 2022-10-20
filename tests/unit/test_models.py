from django.test import TestCase
from apartment_finder_app.models import QuestionConsultation, Customer
from datetime import datetime

class QuestionConsultationTestCase(TestCase):
    @classmethod
    def setUp(self):
        self.test_customer = Customer.objects.create(customer_username='xixi',
                                                     customer_password='pwd',
                                                     customer_email='test@tamu.edu',
                                                     customer_phone=9792345609,
                                                     customer_gender='m',
                                                     customer_date_of_birth=datetime(2015, 10, 9))

        self.test_question = QuestionConsultation.objects.create(question_purpose=1, apt_area=0, question_text='test',
                                                                 question_status=0,
                                                                 submission_date_time=datetime(2015, 10, 9, 23, 55, 59,
                                                                                               342380),
                                                                 customer_id_id=self.test_customer.customer_id)

    def test_question_id(self):
        question = QuestionConsultation.objects.get(customer_id_id=self.test_customer.customer_id)
        field_label = question._meta.get_field('question_id').verbose_name
        self.assertEqual(field_label, 'question id')

    def test_question_purpose(self):
        question = QuestionConsultation.objects.get(customer_id_id=self.test_customer.customer_id)
        field_label = question._meta.get_field('question_purpose').verbose_name
        self.assertEqual(field_label, 'question purpose')