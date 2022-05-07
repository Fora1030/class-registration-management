from rest_framework import serializers
from classes.models import Classes, StudentProfile
from rest_framework.reverse import reverse

class ClassesListSerializer(serializers.ModelSerializer):    

    class Meta:
        model = Classes
        fields = [
            'id',
            'class_name',
            'professor_name',
            'number_of_credits',
            'description',
            'location',
            'start_date',
            'end_date',
            'avaible_seats',
            'open',
            'student',
        ]

        depht = 1
    def get_absolute_url(self, obj):
        return reverse('classes_detail', args=(obj.pk,))

class ClassesDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = [
            'id', 
            'class_name',
            'professor_name',
            'number_of_credits',
            'description', 
            'location', 
            'start_date', 
            'end_date',
            'avaible_seats',
            'open',
            'student',
            
        ]
        depht = 1

class StudentProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = [
            "user_id",
            'bio',
            'user',
            'courses',
        ]
        depht = 1
    def get_absolute_url(self, obj):
        return reverse('students_detail', args=(obj.pk,))

class StudentProfileDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentProfile
        fields = [
            'user_id',
            'bio',
            'user',
            'courses',
        ]
        depht = 1