import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { AboutCompanyComponent } from './about-company/about-company.component';
import { OurServicesComponent } from './our-services/our-services.component';
import { HowToInstallComponent } from './how-to-install/how-to-install.component';
import { WhyChooseComponent } from './why-choose/why-choose.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    AboutCompanyComponent,
    OurServicesComponent,
    HowToInstallComponent,
    WhyChooseComponent,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor(private metaService: Meta) {}
  ngOnInit(): void {
    this.metaService.updateTag({
      name: 'description',
      content:
        'منصة VT هي منصة سعودية لإصدار عقود صيانة أجهزة الكاميرات الأمنية ، حيث تصدر العقود من جهات معتمدة ومرخصة من الهيئة العليا للأمن الصناعي ، تمتاز المنصة بسهولة عملها ولا تحتاج إلى تواصل مع أي شخص لإصدار العقود أو تجديدها أو طلبات الصيانة .',
    });
  }
}
