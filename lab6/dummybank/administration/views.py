from django.shortcuts import render
from django.contrib.admin.views.decorators import staff_member_required
from bank.models import Transfer

# Create your views here.
@staff_member_required
def approve_all(request):
	Transfer.objects.update(approved=True)
