from django.shortcuts import render, HttpResponse, redirect
from django.views.decorators.csrf import csrf_exempt
from rest_framework.parsers import JSONParser
from django.http.response import JsonResponse
from rest_framework import status


from io import BytesIO

from apartment_finder_app import models
from apartment_finder_app.utils.code import check_code
from apartment_finder_app.models import QuestionConsultation
from apartment_finder_app.serializers import QuestionConsultationSerializer
from apartment_finder_app.utils.forms import LoginForm, ChangePasswordForm


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


@csrf_exempt
def login(request):
    if request.method == 'GET':
        # form = LoginForm()
        # return render(request, 'login.html', {'form': form})
        return JsonResponse({}, safe=False)

    form = LoginForm(data=JSONParser().parse(request))
    # form = LoginForm(data=request.POST)
    if form.is_valid():
        print(form.cleaned_data)

        user_input_code = form.cleaned_data.pop('verification_code')
        real_image_code = request.session.get('image_code', "")
        '''
        if real_image_code.upper() != user_input_code.upper():
            form.add_error('verification_code', 'Wrong Verification Code! ')
            return JsonResponse({"code": "404", "error_message": "Wrong Verification Code! "}, safe=False)
            # return render(request, 'login.html', {'form': form})
        '''
        customer_object = models.Customer.objects.filter(**form.cleaned_data).first()
        if not customer_object:
            form.add_error('customer_password', 'Wrong email or password！')
            return JsonResponse({"code": "404", "error_message": "Wrong email or password！"}, safe=False)
            # return render(request, 'login.html', {'form': form})

        request.session['info'] = {'id': customer_object.customer_id, 'email': customer_object.customer_email}
        request.session.set_expiry(60*60*24*7)
        return JsonResponse({"code": "200", "error_message": ""}, safe=False)

    return JsonResponse({"code": "404", "error_message": "not valid"}, safe=False)


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
        # form = ChangePasswordForm()
        return JsonResponse({})
        # return render(request, 'change_pwd.html', {'form': form})
    form = ChangePasswordForm(data=JSONParser().parse(request))
    if form.is_valid():
        # customer = models.Customer.objects.filter(
        #     customer_id=request.session['info']['id']).first()
        customer = models.Customer.objects.filter(
            customer_email=form.cleaned_data.get('customer_email')).first()
        if customer is None:
            return JsonResponse({"code": "404", "error_message": "Account not found!"}, safe=False)
        if form.cleaned_data.get('old_password') != customer.customer_password:
            form.add_error('old_password', 'Wrong password! ')
            return JsonResponse({"code": "404", "error_message": "Wrong password! "}, safe=False)
            # return render(request, 'change_pwd.html', {'form': form})
        if form.cleaned_data.get('new_password') == customer.customer_password:
            form.add_error('new_password', 'The new password cannot be the same as the previous one! ')
            # return render(request, 'change_pwd.html', {'form': form})
            return JsonResponse({"code": "404", "error_message": "The new password cannot be the same as the previous "
                                                                 "one!"}, safe=False)

        models.Customer.objects.filter(customer_email=customer.customer_email).update(
            customer_password=form.cleaned_data.get('new_password'))
        return JsonResponse({"code": "200", "error_message": ""}, safe=False)
    return JsonResponse({"code": "404", "error_message": "Not valid!"}, safe=False)
