from django.db import models


# Create your models here.
class Customer(models.Model):
    customer_id = models.AutoField(primary_key=True)
    customer_username = models.CharField(max_length=50)
    customer_password = models.CharField(max_length=88)
    customer_email = models.EmailField(max_length=50)
    customer_phone = models.CharField(max_length=30)
    customer_gender = models.CharField(max_length=1)
    customer_date_of_birth = models.DateField()
    customer_security_question = models.IntegerField(default=0)
    # 0 = what is your mother's last name, 1 = which city were you born in, 2 = what is your favorite movie
    customer_security_answer = models.CharField(max_length=50, default='A')


class Admin(models.Model):
    admin_id = models.AutoField(primary_key=True)
    admin_username = models.CharField(max_length=50)
    admin_password = models.CharField(max_length=88)
    admin_email = models.EmailField(max_length=50)
    admin_phone = models.BigIntegerField()


class QuestionConsultation(models.Model):
    question_id = models.AutoField(primary_key=True)
    question_purpose = models.IntegerField()  # 0 = xxx, 1 = xxx
    apt_area = models.IntegerField()  # 0 = College Station, 1 = Austin, 2 = Houston
    question_text = models.TextField()
    question_reply = models.TextField(default='')
    question_status = models.IntegerField()  # 1 = answered, 0 = not annswered
    submission_date_time = models.DateTimeField()
    customer_id = models.ForeignKey(Customer, on_delete=models.CASCADE)


class ApartmentInfo(models.Model):
    apt_id = models.AutoField(primary_key=True)
    apt_name = models.CharField(max_length=100)
    apt_city = models.IntegerField()  # 0 = College Station, 1 = Austin, 2 = Houston, 3 = Dallas
    apt_street = models.CharField(max_length=100)
    apt_zipcode = models.CharField(max_length=20)
    apt_price_low = models.IntegerField()
    apt_price_high = models.IntegerField(blank=True, null=True)
    apt_tag_near_campus = models.SmallIntegerField()     # 0 = no, 1 = yes
    apt_tag_furnished = models.SmallIntegerField()  # 0 = no, 1 = yes
    apt_tag_free_parking = models.SmallIntegerField()  # 0 = no, 1 = yes
    apt_tag_free_we = models.SmallIntegerField()  # 0 = no, 1 = yes
    apt_tag_free_internet = models.SmallIntegerField()  # 0 = no, 1 = yes
    apt_url = models.URLField(max_length=300)
    apt_picture_url = models.URLField(max_length=1024)


