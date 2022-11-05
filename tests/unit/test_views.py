from django.test import TestCase, Client
from django.urls import reverse
from apartment_finder_app.models import QuestionConsultation, Customer
from datetime import datetime
import json


class QuestionConsultationTestCase(TestCase):
    @classmethod
    def setUp(self):
        self.client = Client()
        self.post_url = reverse('add_question_consultation')
        self.test_customer = Customer.objects.create(customer_username='xixi',
                                                     customer_password='pwd',
                                                     customer_email='test@tamu.edu',
                                                     customer_phone=9792345609,
                                                     customer_gender='m',
                                                     customer_date_of_birth=datetime(2015, 10, 9),
                                                     customer_security_question='0',
                                                     customer_security_answer='test'
                                                     )

        self.test_question = QuestionConsultation.objects.create(question_purpose=1, apt_area=0, question_text='test',
                                                                 question_status=0,
                                                                 submission_date_time=datetime(2015, 10, 9, 23, 55, 59,
                                                                                               342380),
                                                                 customer_id_id=self.test_customer.customer_id)

    def test_add_question_consultation_200(self):
        data = {
            "question_purpose": "0",
            "apt_area": "1",
            "question_text": "hehehe",
            "question_status": "0",
            "submission_date_time": "2022-09-09T22:20:30-05:00",
            "customer_id": str(self.test_customer.customer_id)
        }
        response = self.client.post(self.post_url, data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        self.assertEquals(code, "200")

    def test_add_question_consultation_404(self):
        data = {
            "question_purpose": "0",
            "apt_area": "1",
            "question_text": "hehehe",
            "question_status": "0",
            "submission_date_time": "2022-09-09T22:20:30-05:00",
            "customer_id": "10"
        }
        response = self.client.post(self.post_url, data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        self.assertEquals(code, "404")


class CustomerTestCase(TestCase):
    @classmethod
    def setUp(self):
        self.client = Client()
        self.post_put_url = reverse('post/put_customer')
        self.test_customer = Customer.objects.create(customer_username='xixi',
                                                     customer_password='pwd',
                                                     customer_email='test@tamu.edu',
                                                     customer_phone=9792345609,
                                                     customer_gender='m',
                                                     customer_date_of_birth=datetime(2015, 10, 9),
                                                     customer_security_question='0',
                                                     customer_security_answer='test')

    def test_sign_up_200(self):
        data = {
            "customer_username": "hello",
            "customer_password": "testpwdpwd",
            "customer_email": "trytry@tamu.edu",
            "customer_phone": "0001234567",
            "customer_gender": "m",
            "customer_date_of_birth": "2000-09-09",
            "customer_security_question": '0',
            "customer_security_answer": 'test'
        }
        response = self.client.post(self.post_put_url, data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        self.assertEquals(code, "200")

    def test_sign_up_404(self):
        data = {
            "customer_username": "hello",
            "customer_password": "testpwdpwd",
            "customer_email": "trytry@tamu.edu2.0",
            "customer_phone": "0001234567",
            "customer_gender": "m",
            "customer_date_of_birth": "2000-09-09",
            "customer_security_question": '0',
            "customer_security_answer": 'test'
        }
        response = self.client.post(self.post_put_url, data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        self.assertEquals(code, "404")

    def test_update_200(self):
        data = {
            "customer_id": self.test_customer.customer_id,
            "customer_username": "hello",
            # "customer_password": "testpwdpwd",
            "customer_email": "trytry@tamu.edu",
            "customer_phone": "0001234567",
            "customer_gender": "m",
            "customer_date_of_birth": "2000-09-09",
            "customer_security_question": '0',
            "customer_security_answer": 'test'
        }
        response = self.client.put(self.post_put_url, data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        self.assertEquals(code, "200")

    def test_update_404(self):
        data = {
            "customer_id": self.test_customer.customer_id,
            "customer_username": "hello",
            # "customer_password": "testpwdpwd",
            "customer_email": "trytry@tamu.edu2.0",
            "customer_phone": "0001234567",
            "customer_gender": "m",
            "customer_date_of_birth": "2000-09-09",
            "customer_security_question": '0',
            "customer_security_answer": 'test'
        }
        response = self.client.put(self.post_put_url, data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        self.assertEquals(code, "404")

    def test_delete_200(self):
        delete_url = reverse('get/delete_customer', args=[self.test_customer.customer_id])
        response = self.client.delete(delete_url, follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        self.assertEquals(code, "200")
