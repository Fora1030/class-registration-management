import imp
from .serializers import ClassesListSerializer
from rest_framework import generics, permissions
from classes.models import Classes
from django.db import IntegrityError
from django.contrib.auth.models import User
from rest_framework.parsers import JSONParser
from rest_framework.authtoken.models import Token
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate 

class ClassesListAPIView(generics.ListAPIView):
    queryset = Classes.objects.all()
    serializer_class = ClassesListSerializer
    permission_classes = [permissions.IsAuthenticated]

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
