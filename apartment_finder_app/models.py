from django.db import models


# Create your models here.
class Customer(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_username = models.CharField(max_length=50)
    customer_password = models.CharField(max_length=50)
    customer_email = models.EmailField(max_length=50)
    customer_phone = models.BigIntegerField()
    customer_gender = models.CharField(max_length=1)
    customer_date_of_birth = models.DateField()


class Admin(models.Model):
    admin_id = models.AutoField(primary_key=True)
    admin_username = models.CharField(max_length=50)
    admin_password = models.CharField(max_length=50)
    admin_email = models.EmailField(max_length=50)
    admin_phone = models.BigIntegerField()


class QuestionConsultation(models.Model):
    question_id = models.AutoField(primary_key=True)
    question_purpose = models.IntegerField() # 0 = xxx, 1 = xxx
    apt_area = models.IntegerField() # 0 = College Station, 1 = Austin, 2 = Houston
    question_text = models.TextField()
    question_status = models.IntegerField() # 1 = answered, 0 = not annswered
    submission_date_time = models.DateTimeField()
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)