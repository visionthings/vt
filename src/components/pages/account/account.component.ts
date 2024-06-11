import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { RouterLinkActive, RouterModule, Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterLinkActive, NgOptimizedImage],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css',
})
export class AccountComponent implements OnInit {
  constructor(private router: Router, private metaService: Meta) {}
  items: {
    id: number;
    title: string;
    path: string;
  }[] = [
    {
      id: 1,
      title: `المعلومات الشخصية`,
      path: 'personal-information',
    },
    { id: 2, title: `تغيير كلمة المرور`, path: 'change-password' },
    { id: 3, title: `تسجيل الخروج`, path: 'sign-out' },
  ];

  navigateToService(servicePath: string) {
    this.router.navigateByUrl(`/account/${servicePath}`);
  }

  ngOnInit(): void {
    this.metaService.updateTag({
      name: 'description',
      content: 'تحديث بياناتك الشخصية وتغيير كلمة المرور',
    });
  }
}
