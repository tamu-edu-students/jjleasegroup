# Generated by Django 3.2.16 on 2022-10-20 06:13

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('apartment_finder_app', '0007_alter_customer_customer_password'),
    ]

    operations = [
        migrations.AlterField(
            model_name='admin',
            name='admin_password',
            field=models.CharField(max_length=88),
        ),
        migrations.AlterField(
            model_name='customer',
            name='customer_password',
            field=models.CharField(max_length=88),
        ),
    ]
