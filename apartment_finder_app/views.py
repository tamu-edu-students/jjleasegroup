from django.shortcuts import render, HttpResponse, redirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import status
from django import forms

from io import BytesIO

from apartment_finder_app import models
from apartment_finder_app.utils.code import check_code
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


class LoginForm(forms.Form):
    customer_email = forms.EmailField(
        label='customer_email',
        widget=forms.TextInput,
        required=True   # 不能为空
    )
    customer_password = forms.CharField(
        label='customer_password',
        widget=forms.PasswordInput(render_value=True),
        required=True  # 不能为空
    )

    verification_code = forms.CharField(
        label='verification_code',
        widget=forms.TextInput,
        required=True  # 不能为空
    )


def login(request):
    if request.method == 'GET':
        form = LoginForm()
        return render(request, 'login.html', {'form': form})
    form = LoginForm(data=request.POST)
    if form.is_valid():
        user_input_code = form.cleaned_data.pop('verification_code')
        real_image_code = request.session.get('image_code', "")
        if real_image_code.upper() != user_input_code.upper():
            form.add_error('verification_code', 'Wrong Verification Code! ')
            return render(request, 'login.html', {'form': form})

        customer_object = models.Customer.objects.filter(**form.cleaned_data).first()
        if not customer_object:
            form.add_error('customer_password', 'Wrong email or password！')
            return render(request, 'login.html', {'form': form})

        request.session['info'] = {'id': customer_object.customer_id, 'email': customer_object.customer_email}
        request.session.set_expiry(60*60*24*7)  # 七天免登陆
        return HttpResponse('You have logged in! ')
    # 如果失败（为空等等），返回显示错误信息
    return render(request, 'login.html', {'form': form})


def image_code(request):
    img, code_string = check_code()

    # 写入到自己的session中，以便后续获取验证码校验
    request.session['image_code'] = code_string
    request.session.set_expiry(60)

    stream = BytesIO()
    img.save(stream, 'png')
    return HttpResponse(stream.getvalue())