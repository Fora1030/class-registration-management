from django.urls import path
from .import views

urlpatterns = [
    path('classes/', views.ClassesListAPIView.as_view(),  name="classes_list"),
    path('student/signup/', views.student_signup,  name="student_signup"),
    path('faculty/signup/', views.faculty_signup,  name="faculty_signup"),
    path('login/', views.login,  name="login"),
]

