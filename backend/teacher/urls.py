from django.urls import path
from teacher.views import RegisterClassApiView, TeacherApiView

urlpatterns = [
    path('teachers/', TeacherApiView.as_view()),
    path('teachers/<int:id>/classes/', RegisterClassApiView.as_view())
]