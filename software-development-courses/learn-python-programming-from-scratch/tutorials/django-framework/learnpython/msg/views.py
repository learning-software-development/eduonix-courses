from django.shortcuts import render
from django.http import HttpResponse
from .models import Message

# Create your views here.
def index(request):
    if request.POST:
        test = Message(message=request.POST["message"], username=request.POST["name"])
        test.save()
        return HttpResponse("You have added a message " + test.message)

    # output = ""
    msgobjs = Message.objects.all()
    # for x in msgobjs:
    #     output = output + x.message + "<br>"
    # return HttpResponse(output)
    context = {'msgobjs': msgobjs}
    return render(request, 'index.html', context)
