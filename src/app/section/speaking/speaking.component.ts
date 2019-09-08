import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.css']
})
export class SpeakingComponent implements OnInit {

  constructor(private apiService:ApiService) { }
countOfTests;
  ngOnInit() {

  }


  onSubmitSpeaking() {
    const body = {
      email: localStorage.getItem('email'),
      testNumber: localStorage.getItem('testNumber'),
      testStatusUpdate:"speaking"
    }
    this.apiService.updateTestData(body).subscribe((data: any) => {
      // console.log(data);

    })
  }

}
