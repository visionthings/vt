import { Routes } from '@angular/router';
import { HomeComponent } from '../components/pages/home/home.component';
import { AboutUsComponent } from '../components/pages/about-us/about-us.component';
import { ContactUsComponent } from '../components/pages/contact-us/contact-us.component';
import { ContractComponent } from '../components/pages/contract/contract.component';
import { CreateNewContractComponent } from '../components/pages/contract/create-new-contract/create-new-contract.component';
import { RegisteredContractsComponent } from '../components/pages/contract/registered-contracts/registered-contracts.component';
import { VisitRequestComponent } from '../components/pages/contract/visit-request/visit-request.component';
import { TermsAndConditionsComponent } from '../components/pages/terms-and-conditions/terms-and-conditions.component';
import { PrivacyPolicyComponent } from '../components/pages/privacy-policy/privacy-policy.component';
import { ReturnPolicyComponent } from '../components/pages/return-policy/return-policy.component';
import { SignInComponent } from '../components/pages/sign-in/sign-in.component';
import { SignUpComponent } from '../components/pages/sign-up/sign-up.component';
import { AccountComponent } from '../components/pages/account/account.component';
import { PersonalInformationComponent } from '../components/pages/account/personal-information/personal-information.component';
import { ChangePasswordComponent } from '../components/pages/account/change-password/change-password.component';
import { SignOutComponent } from '../components/pages/account/sign-out/sign-out.component';
import { PaymentComponent } from '../components/pages/contract/payment/payment.component';
import { FinalContractComponent } from '../components/pages/contract/final-contract/final-contract.component';
import { PaymentRedirectComponent } from '../components/pages/contract/payment-redirect/payment-redirect.component';
import { authGuard } from '../guards/auth.guard';
import { VerifyComponent } from '../components/pages/verify/verify.component';
import { EmailVerificationComponent } from '../components/pages/email-verification/email-verification.component';
import { EmailVerifiedComponent } from '../components/pages/email-verified/email-verified.component';
import { CompaniesComponent } from '../components/pages/contract/companies/companies.component';
import { ContractQueryComponent } from '../components/pages/contract-query/contract-query.component';
import { CompanyInformationComponent } from '../components/pages/company-information/company-information.component';
import { VisitPaymentComponent } from '../components/pages/contract/visit-payment/visit-payment.component';
import { VisitPaymentRedirectComponent } from '../components/pages/contract/visit-payment-redirect/visit-payment-redirect.component';
import { VisitCompleteComponent } from '../components/pages/contract/visit-complete/visit-complete.component';
import { RenewContractPaymentComponent } from '../components/pages/contract/renew-contract-payment/renew-contract-payment.component';
import { RenewContractPaymentRedirectComponent } from '../components/pages/contract/renew-contract-payment-redirect/renew-contract-payment-redirect.component';
import { RenewedContractComponent } from '../components/pages/contract/renewed-contract/renewed-contract.component';
import { ResetPasswordComponent } from '../components/pages/reset-password/reset-password.component';
import { contractGuard } from '../guards/contract.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    title: 'منصة VT لعقود صيانة كاميرات المراقبة',
  },
  { path: 'about-us', component: AboutUsComponent, title: 'عن المنصة' },
  { path: 'contract-query/:id', component: ContractQueryComponent },
  {
    path: 'contract',
    component: ContractComponent,
    pathMatch: 'prefix',
    title: 'عقد الكاميرات',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'create-new-contract',
        pathMatch: 'full',
      },
      {
        path: 'create-new-contract',
        component: CreateNewContractComponent,
        title: 'إنشاء عقد جديد',
      },
      {
        path: 'payment',
        component: PaymentComponent,
        title: 'الدفع',
      },
      {
        path: 'payment-redirect',
        component: PaymentRedirectComponent,
      },
      {
        path: 'final-contract',
        component: FinalContractComponent,
        canActivate: [contractGuard],
        title: 'العقد النهائي',
      },
      {
        path: 'registered-contracts',
        component: RegisteredContractsComponent,
        title: 'العقود المسجلة',
      },
      {
        path: 'renew-contract-payment',
        component: RenewContractPaymentComponent,
        title: 'الدفع',
      },
      {
        path: 'renew-contract-payment-redirect',
        component: RenewContractPaymentRedirectComponent,
      },
      {
        path: 'renewed-contract',
        component: RenewedContractComponent,
        canActivate: [contractGuard],
        title: 'تجديد العقد',
      },
      {
        path: 'companies',
        component: CompaniesComponent,
        title: 'الشركات المسجلة',
      },
      {
        path: 'visit-request',
        component: VisitRequestComponent,
        title: 'طلبات الزيارة',
      },
      {
        path: 'visit-payment',
        component: VisitPaymentComponent,
        title: 'الدفع',
      },
      {
        path: 'visit-payment-redirect',
        component: VisitPaymentRedirectComponent,
      },
      {
        path: 'visit-complete',
        component: VisitCompleteComponent,
        title: 'زيارة تقني',
      },
    ],
  },
  { path: 'contact-us', component: ContactUsComponent, title: 'اتصل بنا' },
  {
    path: 'terms-and-conditions',
    component: TermsAndConditionsComponent,
    title: 'الشروط والأحكام',
  },
  {
    path: 'privacy-policy',
    component: PrivacyPolicyComponent,
    title: 'سياسة الخصوصية',
  },
  {
    path: 'return-policy',
    component: ReturnPolicyComponent,
    title: 'سياسة الاستبدال والاسترجاع',
  },
  { path: 'verify', component: VerifyComponent },
  { path: 'sign-up', component: SignUpComponent, title: 'التسجيل' },
  {
    path: 'company-information',
    component: CompanyInformationComponent,
    title: 'بيانات الشركة',
  },
  { path: 'sign-in', component: SignInComponent, title: 'تسجيل الدخول' },
  {
    path: 'email-verification',
    component: EmailVerificationComponent,
    title: 'التحقق من البريد الإلكتروني',
  },
  {
    path: 'email-verified',
    component: EmailVerifiedComponent,
    title: 'التحقق من البريد الإلكتروني',
  },
  {
    path: 'reset-password',
    component: ResetPasswordComponent,
    title: 'إعادة تعيين كلمة المرور',
  },
  {
    path: 'account',
    component: AccountComponent,
    pathMatch: 'prefix',
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'personal-information',
        pathMatch: 'full',
        title: 'البيانات الشخصية',
      },
      {
        path: 'personal-information',
        component: PersonalInformationComponent,
        title: 'البيانات الشخصية',
      },
      {
        path: 'change-password',
        component: ChangePasswordComponent,
        title: 'تغيير كلمة المرور',
      },

      {
        path: 'sign-out',
        component: SignOutComponent,
        title: 'تسجيل الخروج',
      },
    ],
  },
];
