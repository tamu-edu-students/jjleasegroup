from django.shortcuts import render, HttpResponse, redirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import status
from django.contrib.auth.hashers import make_password

from io import BytesIO

from apartment_finder_app import models
from apartment_finder_app.utils.code import check_code
from apartment_finder_app.utils.forms import LoginForm, ChangePasswordForm, GetPasswordBackForm

from apartment_finder_app.models import QuestionConsultation, Customer, ApartmentInfo
from apartment_finder_app.serializers import QuestionConsultationSerializer, CustomerSerializer_full, \
    CustomerSerializer_update, CustomerSerializer_pwd
from apartment_finder_app.serializers import ApartmentInfoSerializer

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
        print(questions_serializer.errors)
        return JsonResponse({"code": "404"}, safe=False)


@csrf_exempt
def customer_API(request, customer_id=0):
    if request.method == 'POST':
        customer_info = JSONParser().parse(request)
        customer_info['customer_password'] = make_password(password=customer_info['customer_password'], salt=SALT)
        # print(customer_info)
        customer_info_serializer = CustomerSerializer_full(data=customer_info)
        if customer_info_serializer.is_valid():
            customer_info_serializer.save()
            return JsonResponse({"code": "200"}, safe=False)
        # print(customer_info_serializer.errors)
        return JsonResponse({"code": "404"}, safe=False)
    elif request.method == 'GET':
        customer = Customer.objects.get(customer_id=customer_id)
        customer_info_serializer = CustomerSerializer_update(customer)
        return JsonResponse(customer_info_serializer.data, safe=False)
    elif request.method == 'PUT':
        customer_info = JSONParser().parse(request)
        customer_info['customer_password'] = make_password(password=customer_info['customer_password'], salt=SALT)
        customer = Customer.objects.get(customer_id=customer_info['customer_id'])
        customers_serializer = CustomerSerializer_update(customer, data=customer_info)
        if customers_serializer.is_valid():
            customers_serializer.save()
            return JsonResponse({"code": "200"}, safe=False)
        # print(customers_serializer.errors)
        return JsonResponse({"code": "404"}, safe=False)
    elif request.method == 'DELETE':
        customer = Customer.objects.get(customer_id=customer_id)
        customer.delete()
        return JsonResponse({"code": "200"}, safe=False)


@csrf_exempt
def login(request):
    if request.method == 'GET':
        # form = LoginForm()
        # return render(request, 'login.html', {'form': form})
        return JsonResponse({}, safe=False)

    form = LoginForm(data=JSONParser().parse(request))
    # form = LoginForm(data=request.POST)
    if form.is_valid():
        user_input_code = form.cleaned_data.pop('verification_code')
        real_image_code = request.session.get('image_code', "")
        '''
        if real_image_code.upper() != user_input_code.upper():
            form.add_error('verification_code', 'Wrong Verification Code! ')
            return JsonResponse({"code": "404", "error_message": "Wrong Verification Code! "}, safe=False)
        '''
        customer_object = models.Customer.objects.filter(customer_email=form.cleaned_data.get('customer_email')).first()
        if not customer_object:
            return JsonResponse({"code": "404", "error_message": "Wrong email or password！", "customer_id": ""},
                                safe=False)
        input_password = make_password(password=form.cleaned_data.get('customer_password'), salt=SALT)
        if customer_object.customer_password != input_password:
            return JsonResponse({"code": "404", "error_message": "Wrong email or password！", "customer_id": ""},
                                safe=False)

        request.session['info'] = {'id': customer_object.customer_id, 'email': customer_object.customer_email}
        request.session.set_expiry(60 * 60 * 24 * 7)
        return JsonResponse({"code": "200", "error_message": "", "customer_id": customer_object.customer_id,
                             "name": customer_object.customer_username}, safe=False)

    return JsonResponse({"code": "404", "error_message": "not valid", "customer_id": ""}, safe=False)


def image_code(request):
    img, code_string = check_code()

    request.session['image_code'] = code_string
    request.session.set_expiry(60)

    stream = BytesIO()
    img.save(stream, 'png')
    return HttpResponse(stream.getvalue())


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
        questions_serializer = ApartmentInfoSerializer(apartments, many=True)
        return JsonResponse(questions_serializer.data, safe=False, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        apartment_info = JSONParser().parse(request)
        # print(apartment_info)
        apartment_info_serializer = ApartmentInfoSerializer(data=apartment_info)
        if apartment_info_serializer.is_valid():
            apartment_info_serializer.save()
            return JsonResponse({"code": "200"}, safe=False)
        # print(apartment_info_serializer.errors)
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
