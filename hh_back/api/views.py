from django.shortcuts import render
from .models import Company, Vacancy
from .serializers import VacancySerializers, CompanySerializers
from rest_framework import generics


class CompanyList(generics.ListCreateAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializers


class CompanyDetail(generics.RetrieveAPIView):
    queryset = Company.objects.all()
    serializer_class = CompanySerializers


class CompanyVacancy(generics.ListAPIView):
    serializer_class = VacancySerializers

    def get_queryset(self):
        company_id = self.kwargs['company_id']
        return Vacancy.objects.filter(company_id=company_id)


class VacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializers


class VacancyDetail(generics.RetrieveAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializers


    def get_queryset(self):
     return Vacancy.objects.order_by('-salary')[:10]


class VacancyTopTen(generics.ListAPIView):
    serializer_class = VacancySerializers


