from django.test import TestCase, Client
from django.urls import reverse
from apartment_finder_app.models import QuestionConsultation, Customer
from datetime import datetime
import json


class QuestionConsultationTestCase(TestCase):
    @classmethod
    def setUp(self):
        self.client = Client()
        self.post_url = reverse('add-question-consultation')
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


class LoginTestCase(TestCase):
    def test_view_url_exists_at_desired_location(self):
        resp = self.client.get('/login/')
        self.assertEqual(resp.status_code, 200)

    def test_redirect_if_not_logged_in(self):
        resp = self.client.get('You have logged in! ')
        self.assertRedirects(resp, '/login/')
        