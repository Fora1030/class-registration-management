from django.urls import path
from .import views
from django.contrib.auth import views as auth_views

urlpatterns = [
    path('classes/', views.ClassesListAPIView.as_view(),  name="classes_list"),
    path('student/signup/', views.student_signup,  name="student_signup"),
    path('faculty/signup/', views.faculty_signup,  name="faculty_signup"),
    path('faculty/create/classes/', views.ClassesCreateAPIView.as_view(), name="classes_create"),  
    path('classes/<int:id>/', views.ClassesRetrieveAPIView.as_view(), name="classes_detail"), 
    path('update/classes/<int:id>/', views.ClassesRetrieveUpdateAPIView.as_view(), name="classes_update"),
    path('profile/<int:user_id>/', views.StudentProfileRetrieveUpdateAPIView.as_view(), name="Student_update"),
    path('delete/classes/<int:id>/', views.ClassesDestroyAPIView.as_view(), name="classes_delete"),
    path('user/logout/', auth_views.LogoutView.as_view(), name="logout"),
    path('login/', views.login,  name="login"),
    path('user/', views.current_user,  name="user"),

]


