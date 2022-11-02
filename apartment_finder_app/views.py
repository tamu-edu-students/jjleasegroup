from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import status
from django.contrib.auth.hashers import make_password

from apartment_finder_app.models import QuestionConsultation, Customer
from apartment_finder_app.serializers import QuestionConsultationSerializer, CustomerSerializer

SALT = "CSCE606"
# Create your views here.
@csrf_exempt
def question_consultation_API(request, question_id=0):
    if request.method == 'GET':
        questions = QuestionConsultation.objects.all()
        questions_serializer = QuestionConsultationSerializer(questions, many=True)
        return JsonResponse(questions_serializer.data, safe=False, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        question = JSONParser().parse(request)
        # print(question)
        questions_serializer = QuestionConsultationSerializer(data=question)
        if questions_serializer.is_valid():
            questions_serializer.save()
            return JsonResponse({"code": "200"}, safe=False)
        # print(questions_serializer.errors)
        return JsonResponse({"code": "404"}, safe=False)


@csrf_exempt
def customer_API(request, customer_id=0):
    if request.method == 'POST':
        customer_info = JSONParser().parse(request)
        customer_info['customer_password'] = make_password(password=customer_info['customer_password'], salt=SALT)
        # print(customer_info)
        customer_info_serializer = CustomerSerializer(data=customer_info)
        if customer_info_serializer.is_valid():
            customer_info_serializer.save()
            return JsonResponse({"code": "200"}, safe=False)
        # print(customer_info_serializer.errors)
        return JsonResponse({"code": "404"}, safe=False)
    elif request.method == 'PUT':
        customer_info = JSONParser().parse(request)
        customer_info['customer_password'] = make_password(password=customer_info['customer_password'], salt=SALT)
        customer = Customer.objects.get(customer_id=customer_info['customer_id'])
        customers_serializer = CustomerSerializer(customer, data=customer_info)
        if customers_serializer.is_valid():
            customers_serializer.save()
            return JsonResponse({"code": "200"}, safe=False)
        # print(customers_serializer.errors)
        return JsonResponse({"code": "404"}, safe=False)
    elif request.method == 'DELETE':
        customer = Customer.objects.get(customer_id=customer_id)
        customer.delete()
        return JsonResponse({"code": "200"}, safe=False)


