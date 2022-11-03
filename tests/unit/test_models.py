from django.test import TestCase
from apartment_finder_app.models import QuestionConsultation, Customer
from datetime import datetime

'''
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
        self.assertEqual(field_label, 'question_purpose')
'''


class CustomerTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        Customer.objects.create(customer_id=2,
                                customer_username='alpaca',
                                customer_password='123',
                                customer_email='tester@tamu.edu',
                                customer_phone=1231231234,
                                customer_gender='m',
                                customer_date_of_birth=datetime(2015, 10, 9))

    def test_customer_username_label(self):
        customer = Customer.objects.get(customer_id=2)
        field_label = customer._meta.get_field('customer_username').verbose_name
        self.assertEquals(field_label, 'customer username')

    def test_customer_date_of_birth_label(self):
        customer = Customer.objects.get(customer_id=2)
        field_label = customer._meta.get_field('customer_date_of_birth').verbose_name
        self.assertEquals(field_label, 'customer date of birth')

    def test_customer_password_label(self):
        customer = Customer.objects.get(customer_id=2)
        max_length = customer._meta.get_field('customer_password').max_length
        self.assertEquals(max_length, 50)

