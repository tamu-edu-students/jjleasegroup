# Generated by Django 3.2.16 on 2022-10-07 15:56

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apartment_finder_app', '0002_auto_20221007_1047'),
    ]

    operations = [
        migrations.RenameField(
            model_name='questionconsultation',
            old_name='customer_id',
            new_name='customer',
        ),
    ]