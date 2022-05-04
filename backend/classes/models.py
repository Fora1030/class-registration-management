from django.db import models
from django.contrib.auth.models import User

class Classes(models.Model):
        class_name = models.CharField(max_length=100, blank=False)
        professor_name = models.CharField(max_length=200, blank=False)
        number_of_credits = models.CharField(max_length=10,blank=False)
        description = models.TextField(max_length=245, blank=True)
        location = models.CharField(max_length=245, blank=True)
        start_date = models.DateField(blank=True)
        end_date = models.DateField(blank=True)
        avaible_seats = models.CharField(max_length=100, blank=True)
        students = models.ManyToManyField(User, blank=True) 
        open = models.BooleanField(default=True)