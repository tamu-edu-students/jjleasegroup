# Generated by Django 3.2.16 on 2022-10-07 18:48

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('apartment_finder_app', '0005_rename_customer_id_questionconsultation_customer'),
    ]

    operations = [
        migrations.RenameField(
            model_name='questionconsultation',
            old_name='customer',
            new_name='customer_id',
        ),
    ]