from django.db import models
from django.contrib.auth.models import User


class Classes(models.Model):
        class_id = models.AutoField(primary_key=True)
        class_name = models.CharField(max_length=100, blank=True)
        professor_name = models.CharField(max_length=200, blank=True)
        number_of_credits = models.CharField(max_length=10,blank=True)
        description = models.TextField(max_length=500, blank=True)
        location = models.CharField(max_length=245, blank=True)
        start_date = models.DateField(blank=True)
        end_date = models.DateField(blank=True)
        avaible_seats = models.CharField(max_length=100, blank=True)
        open = models.BooleanField(default=True)
        
        def __str__(self):
            return str(self.class_id)

class StudentProfile(models.Model):
        bio = models.CharField(max_length=500, blank=True)
        user = models.OneToOneField(User, on_delete=models.CASCADE,  primary_key=True)
        courses = models.ManyToManyField(Classes, blank=True)

        def __str__(self):
            return str(self.user)
        
