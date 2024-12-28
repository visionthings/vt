import { Component } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GreenButtonComponent } from '../../../../shared/green-button/green-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about-company',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage, GreenButtonComponent, RouterLink],
  templateUrl: './about-company.component.html',
  styleUrl: './about-company.component.css',
})
export class AboutCompanyComponent {
  statistics_first_row: { id: number; title: string; image_url: string }[] = [
    {
      id: 1,
      title: 'عقد معتمد',
      image_url: 'assets/images/about_company/approved-contract.png',
    },
    {
      id: 2,
      title: 'إصدار العقد آلياً',
      image_url: 'assets/images/about_company/online-contract.png',
    },
    {
      id: 3,
      title: 'طلبات الصيانة آلياً',
      image_url: 'assets/images/about_company/maintenance-online.png',
    },
  ];
  statistics_second_row: { id: number; title: string; image_url: string }[] = [
    {
      id: 1,
      title: 'تجديد العقد آلياً',
      image_url: 'assets/images/about_company/renewal-online.png',
    },
    {
      id: 2,
      title: 'منصة موثقة',
      image_url: 'assets/images/about_company/approved.png',
    },
    {
      id: 3,
      title: 'بيانات الدفع مشفرة',
      image_url: 'assets/images/about_company/encrypted.png',
    },
  ];
}
