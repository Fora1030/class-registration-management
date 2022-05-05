import imp
from .serializers import ClassesListSerializer, ClassesDetailSerializer
from rest_framework import generics, permissions
from rest_framework.views import APIView
from classes.models import Classes
from django.db import IntegrityError
from django.contrib.auth.models import User
from rest_framework.parsers import JSONParser
from rest_framework import status
from rest_framework.response import Response
from rest_framework.authtoken.models import Token
from django.http.response import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import authenticate 

class ClassesListAPIView(generics.ListAPIView):
    queryset = Classes.objects.all()
    serializer_class = ClassesListSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user

class ClassesRetrieveAPIView(generics.RetrieveAPIView):
    lookup_field = "id"
    queryset = Classes.objects.all()
    serializer_class = ClassesDetailSerializer
    permission_classes = [permissions.IsAuthenticated]


class ClassesCreateAPIView(generics.CreateAPIView):
    queryset = Classes.objects.all()
    serializer_class = ClassesDetailSerializer
    permission_classes = [permissions.IsAuthenticated]


class ClassesRetrieveUpdateAPIView(generics.RetrieveUpdateAPIView):
    lookup_field = "id"
    queryset = Classes.objects.all()
    serializer_class = ClassesDetailSerializer
    permission_classes = [permissions.IsAuthenticated]


class ClassesDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    lookup_field = "id"
    serializer_class = ClassesDetailSerializer
    queryset = Classes.objects.all()
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


def current_user(request):
    if request.method == 'GET':
        data = JSONParser().parse(user)
        
        print(data['username'] + '-----------------------------')
        return Response({
            'username' : data['username'],
            
        })


class Logout(APIView):
    def get(self, request, format=None):
        # simply delete the token to force a login
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)
