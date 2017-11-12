from django.shortcuts import render

# Create your views here.
from django.http import HttpResponse
from cybergoose.models import Substance

def index(request):
    return HttpResponse("Cybergoose")