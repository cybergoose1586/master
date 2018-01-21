from array import array

from django.shortcuts import render
from cybergoose.models import Substance, User
from cybergoose.choices import names


def about_us(request):
    return render(request, "about_us.html")


def enter(request):
    return render(request, "enter.html")


def error(request):
    return render(request, "error.html")


def feedback(request):
    return render(request, "feedback.html")


def HeaderUpdate(request):
    return render(request, "HeaderUpdate.html")


def registration(request):
    return render(request, "registration.html")


def settings(request):
    return render(request, "settings.html")


def something(request):
    return render(request, "something.html")


def visualization(request):
    return render(request, "visualization.html", {'status_choices': getSubstances()})


def start_page(request):
    return render(request, "Start page.html")


def take(name):
    for i in Substance.objects.values():
        if i['name'] == name:
            return i
    return -1


def secondTake(name,password):
    for i in User.objects.values():
        if i['name'] == name:
            for b in User.objects.values():
                if b['password'] == password:
                    return 1
        return -1


def getSubstances():
    all = []
    for i in Substance.objects.values():
        a = {'key': i['Key'], 'name': i['name']}
        all.append(a)
    return(all)



