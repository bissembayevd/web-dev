from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Company, Vacancy
from .serializers import CompanySerializers, VacancySerializers

@api_view(['GET', 'POST'])
def company_list(request):
    if request.method == 'GET':
        companies = Company.objects.all()
        serializer = CompanySerializers(companies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = CompanySerializers(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def company_detail(request, pk):
    try:
        company = Company.objects.get(pk=pk)
    except Company.DoesNotExist:
        return Response({'message': 'Company not found'}, status=404)

    if request.method == 'GET':
        serializer = CompanySerializers(company)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = CompanySerializers(company, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)

    elif request.method == 'DELETE':
        company.delete()
        return Response({'message': 'Company deleted'}, status=204)

@api_view(['GET'])
def company_vacancies(request, company_id):
    vacancies = Vacancy.objects.filter(company_id=company_id)
    serializer = VacancySerializers(vacancies, many=True)
    return Response(serializer.data)
