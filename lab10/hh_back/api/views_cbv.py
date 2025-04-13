from rest_framework import generics
from .models import Company, Vacancy
from .serializers import CompanySerializers, VacancySerializers

class VacancyList(generics.ListCreateAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializers

class VacancyDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Vacancy.objects.all()
    serializer_class = VacancySerializers

class VacancyTopTen(generics.ListAPIView):
    serializer_class = VacancySerializers

    def get_queryset(self):
        return Vacancy.objects.order_by('-salary')[:10]
