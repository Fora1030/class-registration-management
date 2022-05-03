from rest_framework import serializers
from classes.models import Classes
from rest_framework.reverse import reverse

class ClassesListSerializer(serializers.ModelSerializer):    
    class Meta:
        model = Classes
        fields = [
            'class_name',
            'professor_name',
            'number_of_credits',
            'description',
            'location',
            'start_date',
            'end_date',
            'avaible_seats',
            'students',
            'open',
        ]
    
    def get_absolute_url(self, obj):
        return reverse('classes_detail', args=(obj.pk,))
