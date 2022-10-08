from django.urls import path
from teacher.views import HomeApiView

urlpatterns = [
    path('', HomeApiView.as_view()),
]