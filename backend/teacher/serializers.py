from django.forms import ValidationError
from rest_framework import serializers

from teacher.models import Lecture, Teacher

class TeacherSerializer(serializers.ModelSerializer):
    class Meta:
        model = Teacher
        fields = '__all__'

class RegisterClassSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=100)
    email = serializers.EmailField(max_length=255)

    def validate_name(self, value):
        if len(value) < 3:
            raise ValidationError('It should have at least 3 characters')
        return value

class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Lecture
        fields = '__all__'