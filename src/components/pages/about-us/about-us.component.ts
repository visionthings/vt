import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutHeaderComponent } from './about-header/about-header.component';
import { OurVisionComponent } from './our-vision/our-vision.component';
import { CompanyValuesComponent } from './company-values/company-values.component';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [
    CommonModule,
    AboutHeaderComponent,
    OurVisionComponent,
    CompanyValuesComponent,
  ],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {
  constructor(private metaService: Meta) {}
  ngOnInit(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'نبذة تعريفية عن منصة VT لعقود صيانة كاميرات المراقبة',
    });
  }
}
