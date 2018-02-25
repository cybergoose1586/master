from django.shortcuts import render_to_response,redirect
from django.shortcuts import render
from cybergoose.models import Substance
from django.contrib import auth
from django.contrib.auth.forms import UserCreationForm
from django.template.context_processors import csrf

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
    return render(request, "visualization.html")
def start_page(request):
    return render(request, "Start page.html")

def feedbacks(request, article_id = 1):
    comment_form = Comment_form
    args = {}
    args.update(csrf(request))
    args['article'] = Article.objects.get(id = article_id)
    args['comments'] = Comments.objects.filter(comments_article_id = article_id)
    args['form'] = comment_form
    return render_to_response('feedback.html', args)
# 2
def take(name):
    for i in Substance.objects.values():
        if i['name'] == name:
            return i
    return -1


def login(request):
    args = {}
    args.update(csrf(request))
    if request.POST:
        email = request.POST.get('email', '')
        password = request.POST.get('password', '')
        user = auth.authenticate(email = email, password = password)
        if user is not None:
            auth.login(request, user)
            return redirect('/')
        else:
            args['login_error'] = "Пользователь не найден"
            return render_to_response('enter.html', args)
    else:
        return render_to_response('enter.html', args)


def logout(request):
    auth.logout(request)
    return redirect("/")



def register(request):
    args = {}
    args.update(csrf(request))
    args['form'] = UserCreationForm()
    if request.POST:
        newuser_form = UserCreationForm(request.POST)
        if newuser_form.is_valid():
            newuser_form.save()
            newuser = auth.authenticate(username = newuser_form.cleaned_data['username'], password = newuser_form.cleaned_data[password2])
            auth.login(request, newuser)
            return redirect('/')
        else:
            args['form'] = newuser_form
    return render_to_response('registration.html', args)









