from django.test import TestCase, Client
from django.urls import reverse
from apartment_finder_app.models import QuestionConsultation, Customer, ApartmentInfo
from datetime import datetime
import json
from django.contrib.auth.hashers import make_password

SALT = "CSCE606"


class LoginTestCase(TestCase):
    def test_view_url_exists_at_desired_location(self):
        resp = self.client.get('/login/')
        self.assertEqual(resp.status_code, 200)

    def test_redirect_if_not_logged_in(self):
        resp = self.client.get('You have logged in! ')
        self.assertRedirects(resp, '/login/')


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


class ChangePasswordCase(TestCase):
    @classmethod
    def setUp(cls):
        cls.client = Client()
        cls.post_put_url = reverse('change-password')
        cls.test_customer = Customer.objects.create(customer_id=3,
                                                    customer_username='alpaca',
                                                    customer_password=make_password(password='123', salt=SALT),
                                                    customer_email='tester1@tamu.edu',
                                                    customer_phone=1231231234,
                                                    customer_gender='m',
                                                    customer_date_of_birth=datetime(2015, 10, 9),
                                                    customer_security_question=0,
                                                    customer_security_answer='N'
                                                    )

    def test_is_wrong_password(self):
        data = {
            "customer_email": "tester1@tamu.edu",
            "old_password": "234",
            "new_password": "345"
        }
        response = self.client.post(self.post_put_url, data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        message = json.loads(response.content.decode('utf-8'))["error_message"]
        self.assertEquals(code, "404")
        self.assertEquals(message, 'Wrong password! ')

    def test_is_same_password_as_before(self):
        data = {
            "customer_email": "tester1@tamu.edu",
            "old_password": "123",
            "new_password": "123"
        }
        response = self.client.post(self.post_put_url, data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        message = json.loads(response.content.decode('utf-8'))["error_message"]
        self.assertEquals(code, "404")
        self.assertEquals(message, 'The new password cannot be the same as the previous one!')

    def test_successful_change(self):
        data = {
            "customer_email": "tester1@tamu.edu",
            "old_password": "123",
            "new_password": "234"
        }
        response = self.client.post(self.post_put_url, data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        message = json.loads(response.content.decode('utf-8'))["error_message"]
        self.assertEquals(code, "200")
        self.assertEquals(message, "")


class GetBackPasswordCase(TestCase):
    @classmethod
    def setUp(cls):
        cls.client = Client()
        cls.post_put_url = reverse('get_back_password')
        cls.test_customer = Customer.objects.create(customer_id=3,
                                                    customer_username='alpaca',
                                                    customer_password=make_password(password='123', salt=SALT),
                                                    customer_email='tester1@tamu.edu',
                                                    customer_phone=1231231234,
                                                    customer_gender='m',
                                                    customer_date_of_birth=datetime(2015, 10, 9),
                                                    customer_security_question=0,
                                                    customer_security_answer='N'
                                                    )

    def test_get_question(self):
        data = {
            "customer_email": "tester1@tamu.edu"
        }
        response_get = self.client.post(reverse('get_question_text'), data, content_type="application/json",
                                        follow=True)

        question_text = json.loads(response_get.content.decode('utf-8'))["customer_security_question"]
        self.assertEquals(question_text, "what is your mother's last name")

    def test_is_customer_find(self):
        data = {
            "customer_email": "tester2@tamu.edu",
            "new_password": "123",
            'customer_security_answer': 'N'
        }
        response = self.client.post(self.post_put_url, data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        message = json.loads(response.content.decode('utf-8'))["error_message"]
        self.assertEquals(code, "404")
        self.assertEquals(message, 'Account not found!')

    def test_is_security_question_wrong(self):
        data = {
            "customer_email": "tester1@tamu.edu",
            "new_password": "123",
            'customer_security_answer': 'Y'
        }
        response = self.client.post(self.post_put_url, data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        message = json.loads(response.content.decode('utf-8'))["error_message"]
        self.assertEquals(code, "404")
        self.assertEquals(message, "Wrong security question answer! ")

    def test_is_security_question_right(self):
        data = {
            "customer_email": "tester1@tamu.edu",
            "new_password": "123",
            'customer_security_answer': 'N'
        }
        response = self.client.post(self.post_put_url, data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        message = json.loads(response.content.decode('utf-8'))["error_message"]
        self.assertEquals(code, "200")
        self.assertEquals(message, "")


class ApartmentInfoTestCase(TestCase):
    @classmethod
    def setUp(cls):
        cls.client = Client()
        cls.get_post_url = reverse('get_post_apt')
        cls.test_apt = ApartmentInfo.objects.create(apt_id=1,
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
        cls.test_data = {
            'apt_id': 2,
            'apt_name': 'ParkWest',
            'apt_state': 'Texas',
            'apt_city': 0,
            'apt_street': '503 George Bush Dr W',
            'apt_zipcode': '77840',
            'apt_price_low': 600,
            'apt_price_high': 800,
            'apt_tag_near_campus': 0,
            'apt_tag_furnished': 1,
            'apt_tag_free_parking': 0,
            'apt_tag_free_we': 0,
            'apt_tag_free_internet': 1,
            'apt_url': 'https://www.parkwestlife.com/',
            'apt_picture_url': "howdy.png",
        }

    def test_get(self):
        resp = self.client.get(self.get_post_url)
        self.assertEqual(resp.status_code, 200)

    def test_post_200(self):
        response = self.client.post(self.get_post_url, self.test_data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        self.assertEquals(code, "200")

    def test_post_404(self):
        del self.test_data['apt_name']
        response = self.client.post(self.get_post_url, self.test_data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        self.assertEquals(code, "404")

    def test_update_200(self):
        self.client.post(self.get_post_url, self.test_data, content_type="application/json", follow=True)
        self.test_data['apt_zipcode'] = '77825'
        response = self.client.put(self.get_post_url, self.test_data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        self.assertEquals(code, "200")

    def test_update_404(self):
        self.test_data['zipcode'] = '77825'
        response = self.client.put(self.get_post_url, self.test_data, content_type="application/json", follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        self.assertEquals(code, "404")

    def test_delete_200(self):
        delete_url = reverse('delete_apt', args=[self.test_apt.apt_id])
        response = self.client.delete(delete_url, follow=True)
        code = json.loads(response.content.decode('utf-8'))["code"]
        self.assertEquals(code, "200")
