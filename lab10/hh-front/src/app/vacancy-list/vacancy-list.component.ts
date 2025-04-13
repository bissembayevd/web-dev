import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VacancyService } from '../vacancy.service';
import { Vacancy } from '../models/vacancy';

@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  templateUrl: './vacancy-list.component.html',
  imports: [CommonModule],
  styleUrls: ['./vacancy-list.component.css']
})
export class VacancyListComponent implements OnInit, OnChanges {
  @Input() companyId: number = 0;
  vacancies: Vacancy[] = [];

  constructor(private vacancyService: VacancyService) { }

  ngOnChanges(): void {
    console.log('Получен companyId:', this.companyId);
    if (this.companyId) {
      this.vacancyService.getVacanciesByCompany(this.companyId).subscribe(data => {
        console.log('Вакансии:', data);
        this.vacancies = data;
      });
    }
  }


  ngOnInit(): void {}
}
