from django.shortcuts import render, redirect
from django.http import HttpResponse, HttpResponseRedirect
from django.contrib.auth.decorators import login_required
from django.forms import modelformset_factory
from django.shortcuts import render
from bank.models import Transfer, TransferForm

# Create your views here.
# Z RACHUNKU
# KWOTA ____,__
# NA RACHUNEK
# NAZWA ODBIORCY
# ADRES ODBIORCY: ULICA, KOD, MIASTO
# TYTUŁ PRZELEWU

# user = models.ForeignKey(settings.AUTH_USER_MODEL, editable=False)
# acc_num_from = models.CharField('from account number', max_length=28)
# amount = MoneyField('transfer amount', max_digits=12, decimal_places=2, default_currency='PLN')
# acc_num_to = models.CharField('to account number', max_length=28)
# rec_name = models.CharField('receiver name', max_length=120)il
# rec_street = models.CharField('street', max_length=64)
# rec_pcode = models.CharField('postcode', max_length=6)
# rec_city = models.CharField('city', max_length=32)
# title = models.TextField('title', max_length=140)
# post_time = models.DateTimeField('transfer date', auto_now=False, auto_now_add=True, editable=False)


@login_required
def transfer(request):
    """if request.method == 'GET':
        form = TransferForm(request.GET, request.FILES)
        if form.is_valid():
        # return HttpResponseRedirect('/bank')
            transfer = form.save(commit=False)
            transfer.user = request.user
            return render(request, 'bank/preview.html', {'form': form})
    else:"""
    form = TransferForm()
    return render(request, 'bank/transfer.html', {'form': form})


@login_required
def preview(request):  #wysylam na serwer
    if request.method == 'GET':
        form = TransferForm(request.GET, request.FILES)
        return render(request, 'bank/preview.html', {'form': form})
    elif request.method == 'POST':
        form = TransferForm(request.POST, request.FILES)
        if form.is_valid():
            transfer = form.save(commit=False)  # zwraca model i nie zapisuje w bazie
            transfer.user = request.user
            transfer.save()  # zapisuje na serwerze
            return HttpResponseRedirect('/bank/confirmation')
    else:
        form = TransferForm()
        return render(request, 'bank/transfer.html', {'form': form})


@login_required
def confirmation(request):  #sciagam z serwera
    transfer = Transfer.objects.filter(user=request.user).order_by('post_time').reverse()[0:1]
    for t in transfer:
        t.post_time = t.post_time.strftime('%c')
    return render(request, 'bank/history.html', {'transfers': transfer})


@login_required
def history(request):
    user_transfers = Transfer.objects.all().filter(user=request.user)[:10]
    for transfer in user_transfers:
        transfer.post_time =  transfer.post_time.strftime('%c')
    return render(request, 'bank/history.html', {'transfers': user_transfers})


@login_required
def main(request):
    return render(request, 'bank/main.html', {'user': request.user})
