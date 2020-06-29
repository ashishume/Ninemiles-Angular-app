import { ApiService } from './../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public PaymentFormGroup: FormGroup;
  pattern = new RegExp("^[0-9]{10}$");
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private route: Router, private titleService: Title
  ) {
    this.titleService.setTitle('Payment')
    this.PaymentFormGroup = this.fb.group(
      {
        name: new FormControl('', [Validators.required]),
        email: new FormControl('', [Validators.required]),
        amount: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
      },
    );
  }

  userId;
  name = localStorage.getItem('name')
  email = localStorage.getItem('email')
  amount = 500
  phone;
  ngOnInit() {

    const query = {
      email: localStorage.getItem('email')
    }
    this.apiService.getProfileDetails(query).subscribe(data => {
      if (data.status == 200) {
        this.userId = data.body._id;

      }

    })

  }
  onSubmitPaymentForm(form) {
    var formData = form.value
    formData.returnUrl = `https://ninemiles-project.firebaseapp.com/payment-success/${this.userId}`;

    const orderId = "orderId_" + form.value.phone
    formData.orderId = orderId;
    this.apiService.makePayment(formData).subscribe((response: any) => {
      if (response.body.status == 'OK') {
        var url = response.body.paymentLink
        window.location.href = url;
      }
    })

  }

}




