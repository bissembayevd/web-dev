import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ импорт
import { CompanyService } from '../company.service';
import { Company } from '../models/company';

@Component({
  selector: 'app-company-list',
  standalone: true,
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.css'],
  imports: [CommonModule] // ✅ обязательно
})
export class CompanyListComponent {
  companies: Company[] = [];

  @Output() companySelected = new EventEmitter<number>();

  constructor(private companyService: CompanyService) {
    this.companyService.getCompanies().subscribe(data => {
      console.log('📦 Полученные компании:', data); // Должен показать список
      this.companies = data;
    });
  }


  onSelect(companyId: number) {
    console.log('📌 Клик по компании ID:', companyId); // 🔍 лог
    this.companySelected.emit(companyId);
  }

}
