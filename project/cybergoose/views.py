from django.shortcuts import render
from cybergoose.models import Substance

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





