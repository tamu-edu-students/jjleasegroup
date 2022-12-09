from django.shortcuts import render, HttpResponse, redirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import status
from django.contrib.auth.hashers import make_password
from django.core.cache import cache

from io import BytesIO
from pybase64 import b64encode

from apartment_finder_app import models
from apartment_finder_app.utils.code import check_code
from apartment_finder_app.utils.forms import LoginForm, ChangePasswordForm, GetPasswordBackForm

from apartment_finder_app.models import QuestionConsultation, Customer, ApartmentInfo
from apartment_finder_app.serializers import QuestionConsultationSerializer, QuestionConsultationSerializer_update, CustomerSerializer_full, \
    CustomerSerializer_update, CustomerSerializer_pwd
from apartment_finder_app.serializers import ApartmentInfoSerializer

SALT = "CSCE606"


# Create your views here.
@csrf_exempt
def question_consultation_API(request, id=0):
    print("request:", request)
    if request.method == 'GET':
        if 'customer' in str(request):
            print("cus")
            questions = QuestionConsultation.objects.filter(customer_id=id)
            questions_serializer = QuestionConsultationSerializer(questions, many=True)
        elif 'all' in str(request):
            print("all")
            questions = QuestionConsultation.objects.all()
            questions_serializer = QuestionConsultationSerializer(questions, many=True)
        else:
            print("que")
            question = QuestionConsultation.objects.get(question_id=id)
            questions_serializer = QuestionConsultationSerializer(question)
        
        print("ret")
        return JsonResponse(questions_serializer.data, safe=False)

    elif request.method == 'POST':
        question = JSONParser().parse(request)
        # print(question)
        questions_serializer = QuestionConsultationSerializer(data=question)
        if questions_serializer.is_valid():
            questions_serializer.save()
            return JsonResponse({"code": "200"}, safe=False)
        print(questions_serializer.errors)
        return JsonResponse({"code": "404"}, safe=False)
    elif request.method == 'PUT':
        print("update")
        question_info = JSONParser().parse(request)
        question = QuestionConsultation.objects.get(question_id=question_info['question_id'])
        questions_serializer = QuestionConsultationSerializer_update(question, data=question_info)
        if questions_serializer.is_valid():
            questions_serializer.save()
            return JsonResponse({"code": "200"}, safe=False)   
        print(questions_serializer.errors)
        return JsonResponse({"code": "404", "error:": questions_serializer.error}, safe=False) 




@csrf_exempt
def customer_API(request, customer_id=0):
    print(request)
    if request.method == 'POST':
        customer_info = JSONParser().parse(request)
        customer_info['customer_password'] = make_password(password=customer_info['customer_password'], salt=SALT)
        print(customer_info)
        customer_info_serializer = CustomerSerializer_full(data=customer_info)
        if customer_info_serializer.is_valid():
            customer_info_serializer.save()
            customer = Customer.objects.get(customer_email=customer_info['customer_email'])
            # print(customer)
            return JsonResponse({"code": "200", "id": customer.customer_id}, safe=False)
        print(customer_info_serializer.errors)
        return JsonResponse({"code": "404"}, safe=False)
    elif request.method == 'GET':
        if 'email' in str(request):
            print("wer")
            customer = models.Customer.objects.filter(customer_email=customer_id).first()
            print(customer_id)
            if customer:
                return JsonResponse({"code": "200"}, safe=False)
            else:
                return JsonResponse({"code": "404"}, safe=False)
        else:
            customer = Customer.objects.get(customer_id=customer_id)
            customer_info_serializer = CustomerSerializer_update(customer)
            return JsonResponse(customer_info_serializer.data, safe=False)
    elif request.method == 'PUT':
        customer_info = JSONParser().parse(request)
        customer = Customer.objects.get(customer_id=customer_info['customer_id'])
        if 'customer_password' in customer_info:
            customer_info['customer_password'] = make_password(password=customer_info['customer_password'], salt=SALT)
            customers_serializer = CustomerSerializer_pwd(customer, data=customer_info)
        else:
            customers_serializer = CustomerSerializer_update(customer, data=customer_info)
        if customers_serializer.is_valid():
            customers_serializer.save()
            return JsonResponse({"code": "200"}, safe=False)
        print(customers_serializer.errors)
        return JsonResponse({"code": "404"}, safe=False)
    elif request.method == 'DELETE':
        customer = Customer.objects.get(customer_id=customer_id)
        customer.delete()
        return JsonResponse({"code": "200"}, safe=False)


@csrf_exempt
def customer_login(request):
    if request.method == 'GET':
        return JsonResponse({}, safe=False)

    form = LoginForm(data=JSONParser().parse(request))
    if form.is_valid():
        user_input_code = form.cleaned_data.pop('verification_code')
        real_image_code = cache.get('image_code')

        customer_object = models.Customer.objects.filter(customer_email=form.cleaned_data.get('email')).first()
        if not customer_object:
            return JsonResponse({"code": "404", "error_message": "Wrong email！", "id": ""}, safe=False)
        input_password = make_password(password=form.cleaned_data.get('password'), salt=SALT)
        if customer_object.customer_password != input_password:
            return JsonResponse({"code": "404", "error_message": "Wrong password！", "id": ""}, safe=False)

        if real_image_code is None or real_image_code.upper() != user_input_code.upper():
            form.add_error('verification_code', 'Wrong Verification Code! ')
            return JsonResponse({"code": "404", "error_message": "Wrong Verification Code! "}, safe=False)

        return JsonResponse({"code": "200", "error_message": "", "id": customer_object.customer_id, "name": customer_object.customer_username}, safe=False)

    return JsonResponse({"code": "404", "error_message": "not valid", "id": ""}, safe=False)


@csrf_exempt
def admin_login(request):
    if request.method == 'GET':
        return JsonResponse({}, safe=False)

    form = LoginForm(data=JSONParser().parse(request))
    if form.is_valid():
        user_input_code = form.cleaned_data.pop('verification_code')
        real_image_code = cache.get('image_code')
        admin_object = models.Admin.objects.filter(admin_email=form.cleaned_data.get('email')).first()
        if not admin_object:
            return JsonResponse({"code": "404", "error_message": "You are not an admin！", "id": ""}, safe=False)
        input_password = make_password(password=form.cleaned_data.get('password'), salt=SALT)
        if admin_object.admin_password != input_password:
            return JsonResponse({"code": "404", "error_message": "Wrong password！", "id": ""}, safe=False)

        if real_image_code is None or real_image_code.upper() != user_input_code.upper():
            form.add_error('verification_code', 'Wrong Verification Code! ')
            return JsonResponse({"code": "404", "error_message": "Wrong Verification Code! "}, safe=False)

        return JsonResponse({"code": "200", "error_message": "", "id": admin_object.admin_id, "name": admin_object.admin_username}, safe=False)

    return JsonResponse({"code": "404", "error_message": "not valid", "id": ""}, safe=False)


@csrf_exempt
def image_code(request):
    img, code_string = check_code()

    cache.set("image_code", code_string, 60 * 2)

    stream = BytesIO()
    img.save(stream, 'png')
    b64_img = b64encode(stream.getvalue())
    return JsonResponse({"image": bytes.decode(b64_img)}, safe=False)


@csrf_exempt
def change_password(request):
    if request.method == 'GET':
        return JsonResponse({})
    form = ChangePasswordForm(data=JSONParser().parse(request))
    if form.is_valid():
        # customer = models.Customer.objects.filter(
        #     customer_id=request.session['info']['id']).first()
        customer = models.Customer.objects.filter(
            customer_email=form.cleaned_data.get('customer_email')).first()
        if customer is None:
            return JsonResponse({"code": "404", "error_message": "Account not found!"}, safe=False)
        old_password = make_password(password=form.cleaned_data.get('old_password'), salt=SALT)
        new_password = make_password(password=form.cleaned_data.get('new_password'), salt=SALT)
        if old_password != customer.customer_password:
            form.add_error('old_password', 'Wrong password! ')
            return JsonResponse({"code": "404", "error_message": "Wrong password! "}, safe=False)
        if new_password == customer.customer_password:
            form.add_error('new_password', 'The new password cannot be the same as the previous one! ')
            return JsonResponse({"code": "404", "error_message": "The new password cannot be the same as the previous "
                                                                 "one!"}, safe=False)

        models.Customer.objects.filter(customer_email=customer.customer_email).update(
            customer_password=new_password)
        return JsonResponse({"code": "200", "error_message": ""}, safe=False)
    return JsonResponse({"code": "404", "error_message": "Not valid!"}, safe=False)


@csrf_exempt
def get_question_text(request):
    if request.method == 'GET':
        return JsonResponse({})
    customer_email = JSONParser().parse(request)['customer_email']
    customer = models.Customer.objects.filter(customer_email=customer_email).first()
    if customer is None:
        return JsonResponse({'code': 404, 'customer_security_question': "", 'error_message': 'user not found!'})
    question = customer.customer_security_question
    question_text_list = ["what is your mother's last name", "which city were you born in",
                          "what is your favorite movie"]
    question_text = question_text_list[question]
    return JsonResponse({'code': 200, 'customer_security_question': question_text, 'error_message': ""})


@csrf_exempt
def get_back_password(request):
    if request.method == 'GET':
        return JsonResponse({})

    form = GetPasswordBackForm(data=JSONParser().parse(request))
    if form.is_valid():
        customer = models.Customer.objects.filter(
            customer_email=form.cleaned_data.get('customer_email')).first()
        if customer is None:
            return JsonResponse({"code": "404", "error_message": "Account not found!"}, safe=False)
        if form.cleaned_data.get('customer_security_answer') != customer.customer_security_answer:
            return JsonResponse({"code": "404", "error_message": "Wrong security question answer! "}, safe=False)

        new_password = make_password(password=form.cleaned_data.get('new_password'), salt=SALT)
        models.Customer.objects.filter(customer_email=customer.customer_email).update(
            customer_password=new_password)
        return JsonResponse({"code": "200", "error_message": ""}, safe=False)
    return JsonResponse({"code": "404", "error_message": "Not valid!"}, safe=False)


@csrf_exempt
def apt_info_api(request, apt_id=0):
    if request.method == 'GET':
        apartments = ApartmentInfo.objects.all()
        apartments_serializer = ApartmentInfoSerializer(apartments, many=True)
        return JsonResponse(apartments_serializer.data, safe=False, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        apartment_info = JSONParser().parse(request)
        apartment_info_serializer = ApartmentInfoSerializer(data=apartment_info)
        if apartment_info_serializer.is_valid():
            apartment_info_serializer.save()
            return JsonResponse({"code": "200"}, safe=False)
        return JsonResponse({"code": "404"}, safe=False)
    elif request.method == 'PUT':
        apartment_info = JSONParser().parse(request)
        apartment = ApartmentInfo.objects.filter(apt_id=apartment_info['apt_id']).first()
        if apartment is None:
            return JsonResponse({"code": "404"}, safe=False)
        apartment_serializer = ApartmentInfoSerializer(apartment, data=apartment_info)
        if apartment_serializer.is_valid():
            apartment_serializer.save()
            return JsonResponse({"code": "200"}, safe=False)
        # print(customers_serializer.errors)
        return JsonResponse({"code": "404"}, safe=False)
    elif request.method == 'DELETE':
        apartment = ApartmentInfo.objects.filter(apt_id=apt_id).first()
        apartment.delete()
        return JsonResponse({"code": "200"}, safe=False)


@csrf_exempt
def apt_search(request):
    apt_string = JSONParser().parse(request)['key_word']
    apartments = ApartmentInfo.objects.filter(apt_name__icontains=apt_string)
    selected_apartments_serializer = ApartmentInfoSerializer(apartments, many=True)
    return JsonResponse(selected_apartments_serializer.data, safe=False, status=status.HTTP_200_OK)
