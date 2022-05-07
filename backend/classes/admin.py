from django.contrib import admin
from .models import StudentProfile, Classes

# Register your models here.

admin.site.register(Classes)
admin.site.register(StudentProfile)
