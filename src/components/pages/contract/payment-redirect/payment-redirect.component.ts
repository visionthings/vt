import { Component, Injectable, OnInit, Inject } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ActivatedRoute } from "@angular/router";
import { RouterLink, Router } from "@angular/router";
import { first } from "rxjs";
import { ContractService } from "../../../../services/contract.service";
import { PaymentService } from "../../../../services/payment.service";
import { Renderer2 } from "@angular/core";
import { DOCUMENT } from "@angular/common";

@Component({
  selector: "app-payment-redirect",
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: "./payment-redirect.component.html",
  styleUrl: "./payment-redirect.component.css",
})
@Injectable({ providedIn: "root" })
export class PaymentRedirectComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contractService: ContractService,
    private paymentService: PaymentService,
    private renderer: Renderer2,
    @Inject(DOCUMENT) private document: Document
  ) {}

  message = "";
  url = "";
  img = "";
  approvedPaymentData: any = null;
  ngOnInit(): void {
    this.route.queryParamMap.pipe(first()).subscribe({
      next: (res: any) => {
        if (res.params.message === "APPROVED" && res.params.status === "paid") {
          this.message = `عملية الدفع تمت بنجاح وجاري تحويلك الآن لصفحة تحميل العقد`;
          this.url = "/contract/final-contract";
          this.img = "success";
          this.paymentService.fetchPayment(res.params.id).subscribe({
            next: (res: any) => {
              let contract_number;
              if (typeof window !== "undefined") {
                contract_number = localStorage.getItem("contract_number");
                localStorage.setItem("payment_id", res.id);
                localStorage.setItem("payment_amount", res.amount);
              }

              this.contractService
                .applyPayment({ contract_number: contract_number })
                .subscribe({
                  next: () => {
                    setTimeout(() => {
                      this.router.navigateByUrl("/contract/final-contract");
                    }, 3000);
                  },
                });
            },
          });
        } else {
          this.message = `تعذر اتمام عملية السداد، جاري تحويلك لصفحة الدفع مرة أخرى`;
          this.url = "/contract/payment";
          this.img = "failed";
          setTimeout(() => {
            this.router.navigateByUrl("/contract/payment");
          }, 3000);
        }
      },
    });
  }
}
