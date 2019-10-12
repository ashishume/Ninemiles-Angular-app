import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {
  public id;
  constructor(
    route: ActivatedRoute,
    private apiService: ApiService,
    private router: ActivatedRoute, private titleService: Title
  ) {
    this.titleService.setTitle('Payment')
    this.id = route.params.pipe(map(p => p.id));
  }
  paymentStatus;
  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      this.paymentStatus = params.payment_status;
      this.paymentUpdate()
    })
  }
  paymentUpdate() {
    if (this.paymentStatus != "Failed") {

      this.id.subscribe(data => {
        const query = {
          userId: data
        }
        this.apiService.getProfileDetailsOnUserId(query).subscribe((data: any) => {
          const res = data.body[0]
          if (res.paymentStatus == false) {
            const body = {
              email: res.email,
              paymentStatus: true
            }
            this.apiService.setPaymentStatus(body).subscribe()
          }
        })
      })
    }

  }

}
