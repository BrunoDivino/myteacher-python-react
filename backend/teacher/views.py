from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework.status import (
    HTTP_200_OK, 
    HTTP_201_CREATED, 
    HTTP_400_BAD_REQUEST
)

from teacher.models import Teacher, Lecture
from teacher.serializers import (
    ClassSerializer,
    RegisterClassSerializer, 
    TeacherSerializer
)

class TeacherApiView(APIView):
    def get(self, request, format=None):
        teachers = Teacher.objects.all()
        serializer = TeacherSerializer(teachers, many=True)

        return Response(serializer.data, status=HTTP_200_OK)

class RegisterClassApiView(APIView):
    def post(self, request, id, format=None):
        teacher = get_object_or_404(Teacher, id=id)

        serializer = RegisterClassSerializer(data=request.data)
        if serializer.is_valid():
            new_class = Lecture(
                name = serializer.validated_data.get("name"),
                email = serializer.validated_data.get("email"),
                teacher = teacher
            )
            
            new_class.save()
            class_serializer = ClassSerializer(new_class, many=False)
            return Response(class_serializer.data, status=HTTP_201_CREATED)
        
        return Response(
            {
                "message": "There are validation errors.",
                "errors": serializer.errors
            }, 
            status=HTTP_400_BAD_REQUEST
        )