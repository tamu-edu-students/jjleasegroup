from django.test import TestCase
from apartment_finder_app.models import QuestionConsultation, Customer, ApartmentInfo
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
                                customer_date_of_birth=datetime(2015, 10, 9),
                                customer_security_question=0,
                                customer_security_answer='N'
                                )

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
        self.assertEquals(max_length, 88)


class ApartmentInfoTestCase(TestCase):
    @classmethod
    def setUpTestData(cls):
        ApartmentInfo.objects.create(apt_id=1,
                                     apt_name='The Junction',
                                     apt_state='Texas',
                                     apt_city=0,
                                     apt_street='2415 Junction Boys Road',
                                     apt_zipcode='77845',
                                     apt_price_low=500,
                                     apt_price_high=600,
                                     apt_tag_near_campus=0,
                                     apt_tag_furnished=1,
                                     apt_tag_free_parking=0,
                                     apt_tag_free_we=0,
                                     apt_tag_free_internet=1,
                                     apt_url='https://thejunctionatcollegestation.com/',
                                     apt_picture_url="howdy.png",
                                     )

    def test_apt_street_label(self):
        apt = ApartmentInfo.objects.get(apt_id=1)
        field_label = apt._meta.get_field('apt_url').verbose_name
        self.assertEquals(field_label, 'apt url')

    def test_apt_price_high_label(self):
        apt = ApartmentInfo.objects.get(apt_id=1)
        field_label = apt._meta.get_field('apt_price_high').verbose_name
        self.assertEquals(field_label, 'apt price high')

    def test_apt_zipcode_label(self):
        apt = ApartmentInfo.objects.get(apt_id=1)
        field_label = apt._meta.get_field('apt_zipcode').verbose_name
        self.assertEquals(field_label, 'apt zipcode')
