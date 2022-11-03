from django.test import TestCase
from apartment_finder_app.views import LoginForm, ChangePasswordForm


class LoginFormTest(TestCase):
    def test_customer_email_field_label(self):
        form = LoginForm()
        self.assertTrue(form.fields['customer_email'].label is None or
                        form.fields['customer_email'].label == 'customer_email')

    def test_is_form_not_valid(self):
        form_data = {'customer_email': 'test', 'customer_password': '123', 'verification_code': '123'}
        form = LoginForm(data=form_data)
        self.assertFalse(form.is_valid())

    def test_is_form_valid(self):
        form_data = {'customer_email': 'test@tamu.edu', 'customer_password': '123', 'verification_code': '123'}
        form = LoginForm(data=form_data)
        self.assertTrue(form.is_valid())


class ChangePasswordFormTest(TestCase):
    def test_old_password_field_label(self):
        form = ChangePasswordForm()
        self.assertTrue(form.fields['old_password'].label is None or
                        form.fields['old_password'].label == 'old_password')

    def test_is_form_not_valid(self):
        form_data = {'old_password': '123', 'new_password': '234', 'confirmed_new_password': '234'}
        form = ChangePasswordForm(data=form_data)
        self.assertTrue(form.is_valid())