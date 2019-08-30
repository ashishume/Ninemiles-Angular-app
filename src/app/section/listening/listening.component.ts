import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening',
  templateUrl: './listening.component.html',
  styleUrls: ['./listening.component.css']
})
export class ListeningComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  countOfTests;
  ngOnInit() {

    console.log(localStorage.getItem('testNumber'))


    // this.countOfTests = this.apiService.getCountOfTests();

  }
  onSubmitListening() {
    const body = {
      email: localStorage.getItem('email'),
      testDetails: [
        { testNumber: 1, testAttemptStatus: true, testPricingStatus: localStorage.getItem('paymentStatus') }
      ]
    }
    this.apiService.updateTestData(body).subscribe((data: any) => {
      console.log(data);

    })
  }
}
