import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  countOfTests: any = [];
  paymentStatus;
  testDetails;
  testAttemptedArray = [];
  ngOnInit() {
    this.countOfTests = this.apiService.getCountOfTests();
    const query = {
      email: localStorage.getItem('email')
    }
    this.apiService.getProfileDetails(query).subscribe((data: any) => {
      if (data.status == 200) {
        this.paymentStatus = data.body.paymentStatus;
      }
    })

    const param = {
      email: localStorage.getItem('email')
    }

    this.apiService.showTestData(param).subscribe((data: any) => {
      if (data.status == 200) {
        this.testDetails = data.body;
        let tempArray = []
        if (this.testDetails.testDetails) {
          this.testDetails.testDetails.forEach(function (value) {
            tempArray.push(value.testNumber)
          })
        }

        this.countOfTests.forEach(function (value) {

          for (let i = 0; i < tempArray.length; i++) {
            if (value.testNumber == tempArray[i]) {
              value.testAttemptStatus = true;
            }
          }
        })
      }
    })
  }
}
