# Generated by Django 4.0.3 on 2022-05-06 18:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0005_studentprofile_classes_student'),
    ]

    operations = [
        migrations.AddField(
            model_name='studentprofile',
            name='courses',
            field=models.ManyToManyField(blank=True, to='classes.classes'),
        ),
    ]