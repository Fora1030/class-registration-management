from rest_framework import serializers
from classes.models import Classes, StudentProfile
from rest_framework.reverse import reverse

class ClassesListSerializer(serializers.ModelSerializer):    

    class Meta:
        model = Classes
        fields = [
            'class_id',
            'class_name',
            'professor_name',
            'number_of_credits',
            'description',
            'location',
            'start_date',
            'end_date',
            'avaible_seats',
            'open',
        ]

       
    def get_absolute_url(self, obj):
        return reverse('classes_detail', args=(obj.pk,))

class ClassesDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Classes
        fields = [
            'class_id',  
            'class_name',
            'professor_name',
            'number_of_credits',
            'description', 
            'location', 
            'start_date', 
            'end_date',
            'avaible_seats',
            'open',
            
        ]
      

class StudentProfileSerializer(serializers.ModelSerializer):
    courses = ClassesListSerializer(many=True, read_only = False)
    class Meta:
        model = StudentProfile
        fields = [
            "user_id",
            'bio',
            'user',
            'courses',
        ]
    
    def update(self, instance, validated_data):
        courses_data = validated_data.pop('courses')
        instance = super().update(instance, validated_data)
        for course_data in courses_data:
            print(course_data.get('class_id'))
            course = Classes.objects.get(pk=course_data.get('class_name'))
            instance.courses.add(course)
        return instance