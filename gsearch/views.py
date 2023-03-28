import csv

from bs4 import BeautifulSoup
from django.contrib.auth.decorators import login_required
from django.contrib import messages
from django.contrib.auth import login, authenticate
from django.contrib.auth.forms import AuthenticationForm
from django.http import HttpResponse
from django.shortcuts import render, redirect
import requests

from .forms import NewUserForm


@login_required(login_url="/login/")
def home(request):
    results = []
    if request.method == "POST":
        results = []
        q = request.POST['q']
        page = request.POST['page']
        page = int(page) if page else 1
        query = q.replace(' ', '+')
        user_agent = "'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'"
        for i in range(0, page):
            search_url = f"https://google.com/search?q={query}&start={(page - 1) * 10}"
            headers = {"user-agent": user_agent}
            resp = requests.get(search_url, headers=headers)
            if resp.status_code == 200:
                soup = BeautifulSoup(resp.content, "html.parser")
                for g in soup.find_all('div', class_='yuRUbf'):
                    anchors = g.find_all('a')
                    if anchors:
                        link = anchors[0]['href']
                        title = g.find('h3').text
                        item = {"title": title, "link": link}
                        results.append(item)

        if results:
            request.session['scraped_data'] = results
        else:
            messages.warning(request, 'No search result found !')
        return render(request, 'home.html',
                      {'query': q, 'results': results})
    return render(request, 'home.html')


@login_required(login_url="/login/")
def download_file(request):
    if 'scraped_data' in request.session:
        context = request.session['scraped_data']
        response = HttpResponse(content_type='text/csv')
        filename = "GoogleScrap.xls"
        response['Content-Disposition'] = f'attachment; filename="{filename}"'
        writer = csv.writer(response)
        writer.writerow(['Title', 'Link'])
        for data in context:
            writer.writerow([data['title'], data['link']])
        return response
    else:
        return render(request, 'home.html')


def register_request(request):
    if request.method == "POST":
        form = NewUserForm(request.POST)
        if form.is_valid():
            user = form.save()
            login(request, user)
            messages.success(request, "Registration successful." )
            return redirect("home")
        messages.error(request, "Unsuccessful registration. Invalid information.")
    form = NewUserForm()
    return render(request=request, template_name="register.html",
                  context={"register_form": form})


def login_request(request):
    if request.method == "POST":
        form = AuthenticationForm(request, data=request.POST)
        if form.is_valid():
            username = form.cleaned_data.get('username')
            password = form.cleaned_data.get('password')
            user = authenticate(username=username, password=password)
            if user is not None:
                login(request, user)
                messages.info(request, f"You are now logged in as {username}.")
                return redirect("home")
            else:
                messages.error(request, "Invalid username or password222.")
        else:
            messages.error(request, "Invalid username or password111.")
    form = AuthenticationForm()
    return render(request=request, template_name="login.html",
                  context={"login_form": form})
