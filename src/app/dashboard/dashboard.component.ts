import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService, private route: Router) { }
  paymentStatus;
  freeTestDetails;
  paidTestDetails;
  testAttemptedArray = [];
  countOfGivenTests = 0;
  ngOnInit() {
    const query = {
      email: localStorage.getItem('email')
    }
    this.apiService.showTestData(query).subscribe((data: any) => {
      let freeTestArray = []
      let paidTestArray = []
      var countOfGivenTests = 0;
      if (data.status == 200) {
        this.getPaymentStatus(query);
        data.body.testDetails.forEach(function (value) {
          value.testAttemptStatus = false;
          if (value.testPricingStatus == false) {
            freeTestArray.push(value);
          } else {
            paidTestArray.push(value);
          }
          if (value.listening == true && value.speaking == true && value.reading == true && value.writing == true) {
            countOfGivenTests += 1;
            value.testAttemptStatus = true;
          }
        })
        this.countOfGivenTests = countOfGivenTests;
        localStorage.setItem('countOfTests', this.countOfGivenTests.toString())
        this.freeTestDetails = freeTestArray;
        this.paidTestDetails = paidTestArray;
      }
    })
  }

  getPaymentStatus(query) {
    this.apiService.getProfileDetails(query).subscribe((data: any) => {
      if (data.status == 200) {
        localStorage.setItem('paymentStatus', data.body.paymentStatus);
      }
      this.paymentStatus = localStorage.getItem('paymentStatus');
    })
  }

  navigateToSection(testNumber) {
    localStorage.setItem('testNumber',testNumber)
    this.route.navigate(['section'])
  }
}
