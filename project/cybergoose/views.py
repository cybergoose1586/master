from django.shortcuts import render
from django.http import HttpResponse


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
def somethung(request):
    return render(request, "something.html")
def visualization(request):
    return render(request, "visualization.html")
def test(request):
    return render(request, "test.html")


def netrogay(request):
    return render(request, 'ne trogay, ubet.html')
def netrogay(request):
    return HttpResponse("hello!, " + request.GET['TEXT_1'] + " " + request.GET['TEXT_2'])