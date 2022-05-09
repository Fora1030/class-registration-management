# Generated by Django 4.0.3 on 2022-05-09 07:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0007_remove_classes_student'),
    ]

    operations = [
        migrations.AlterField(
            model_name='classes',
            name='class_name',
            field=models.CharField(blank=True, max_length=100),
        ),
        migrations.AlterField(
            model_name='classes',
            name='id',
            field=models.AutoField(primary_key=True, serialize=False),
        ),
        migrations.AlterField(
            model_name='classes',
            name='number_of_credits',
            field=models.CharField(blank=True, max_length=10),
        ),
        migrations.AlterField(
            model_name='classes',
            name='professor_name',
            field=models.CharField(blank=True, max_length=200),
        ),
    ]