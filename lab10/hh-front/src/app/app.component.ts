import { Component } from '@angular/core';
import { CompanyListComponent } from './company-list/company-list.component';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';

@Component({
  selector: 'app-root',
  standalone: true, // ✅ обязательно
  imports: [CompanyListComponent, VacancyListComponent], // ✅ обязательно
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedCompanyId: number = 0;

  selectCompany(companyId: number) {
    console.log('Выбрана компания с id:', companyId);
    this.selectedCompanyId = companyId;
  }
}

