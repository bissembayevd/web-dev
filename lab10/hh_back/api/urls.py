from django.urls import path
from . import views_fbv, views_cbv

urlpatterns = [
    # Function-Based Views для Company
    path('companies/', views_fbv.company_list),
    path('companies/<int:pk>/', views_fbv.company_detail),
    path('companies/<int:company_id>/vacancies/', views_fbv.company_vacancies),

    # Class-Based Views для Vacancy
    path('vacancies/', views_cbv.VacancyList.as_view()),
    path('vacancies/<int:pk>/', views_cbv.VacancyDetail.as_view()),
    path('vacancies/top_ten/', views_cbv.VacancyTopTen.as_view()),
]
