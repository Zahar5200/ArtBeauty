from django.shortcuts import render

def index(request):
    return render(request, 'main/index.html')


def registration(request):
    return render(request, 'main/registration.html')


def service(request):
    return render(request, 'main/service.html')


def sliderService(request):
    return render(request, 'main/sliderService.html')


def community(request):
    return render(request, 'main/community.html')
