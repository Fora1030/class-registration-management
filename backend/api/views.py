from rest_framework.decorators import api_view
from rest_framework import generics, permissions, viewsets
from rest_framework.views import APIView
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.authtoken.models import Token
from rest_framework.response import Response
from .serializers import ClassesListSerializer,ClassesDetailSerializer, StudentProfileSerializer
from classes.models import Classes , StudentProfile
from urllib import request
from django.db import IntegrityError
from django.contrib.auth.models import User
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate, logout
from django.views.generic import ListView




class ClassesListAPIView(generics.ListAPIView):
    queryset = Classes.objects.all()
    serializer_class = ClassesListSerializer
    permission_classes = [permissions.AllowAny]

    def get_object(self):
        return self.request.user

class ClassesRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "class_id"
    queryset = Classes.objects.all()
    serializer_class = ClassesDetailSerializer
    permission_classes = [permissions.AllowAny]


class ClassesCreateAPIView(generics.CreateAPIView):
    queryset = Classes.objects.all()
    serializer_class = ClassesDetailSerializer
    permission_classes = [permissions.AllowAny]


class ClassesRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "class_id"
    queryset = Classes.objects.all()
    serializer_class = ClassesDetailSerializer
    permission_classes = [permissions.AllowAny]


class ClassesDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = "class_id"
    serializer_class = ClassesDetailSerializer
    queryset = Classes.objects.all()
    permission_classes = [permissions.AllowAny]


class StudentProfileRetrieveUpdateAPIView(viewsets.ModelViewSet):
    serializer_class = StudentProfileSerializer
    permission_classes = [permissions.AllowAny]
    def get_queryset(self): 
        student = StudentProfile.objects.all()
        return student

    

@csrf_exempt
def student_signup(request):
    if request.method == 'POST':
        try: 
            data = JSONParser().parse(request)
            user = User.objects.create_user(
                username = data['username'],
                password = data['password'],
                email = data['email'],
                first_name = data['first_name'],
                last_name = data['last_name'],
            
            )
            user.save()
            token = Token.objects.create(user=user)

            return JsonResponse({'token':str(token)}, status=201)
        except IntegrityError:
            return JsonResponse({'error':'username taken. chose another username'}, 
            status = 400)

@csrf_exempt
def faculty_signup(request):
    if request.method == 'POST':
        try: 
            data = JSONParser().parse(request)
            user = User.objects.create_user(
                username = data['username'],
                password = data['password'],
                email = data['email'],
                first_name = data['first_name'],
                last_name = data['last_name'],
                is_staff = True 
            )
            user.save()
            token = Token.objects.create(user=user)

            return JsonResponse({'token':str(token)}, status=201)
        except IntegrityError:
            return JsonResponse({'error':'username taken. chose another username'}, 
            status = 400)


@csrf_exempt
def login(request):
    if request.method == 'POST':
        data = JSONParser().parse(request)
        print(data['username'])
        user = authenticate(
            request,
            username = data['username'],
            password = data['password'],
            )
        if user is None:
            return JsonResponse({'error': 'unable to login. check username and password'},
                status=400)
        else:  
            try:
                token = Token.objects.get(user = user)
            except:
                token = Token.objects.create(user = user)
            return JsonResponse({'token': str(token)}, status=201)

def logout(request):
    return logout(request)

@api_view(['GET'])
def current_user(request):
    user = request.user
    return Response({
      'id' : user.id,
      'username' : user.username,
      'first_name' : user.first_name,
      'last_name' : user.last_name,
      'is_staff' : user.is_staff,
    })
