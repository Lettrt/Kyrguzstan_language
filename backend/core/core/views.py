from django.http import HttpResponse
from django.shortcuts import render

def welcome_view(request):
    return render(request, 'base/welcome.html')
