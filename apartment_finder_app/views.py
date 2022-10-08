from django.shortcuts import render
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import status

from apartment_finder_app.models import QuestionConsultation
from apartment_finder_app.serializers import QuestionConsultationSerializer


# Create your views here.
@csrf_exempt
def question_consultation_API(request, id=0):
    if request.method == 'GET':
        questions = QuestionConsultation.objects.all()
        questions_serializer = QuestionConsultationSerializer(questions, many=True)
        return JsonResponse(questions_serializer.data, safe=False, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        question = JSONParser().parse(request)
        print(question)
        questions_serializer = QuestionConsultationSerializer(data=question)
        if questions_serializer.is_valid():
            questions_serializer.save()
            return JsonResponse({"code": "200"}, safe=False)
        print(questions_serializer.errors)
        return JsonResponse({"code": "404"}, safe=False)
