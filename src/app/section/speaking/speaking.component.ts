import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar-service/navbar.service';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.css']
})
export class SpeakingComponent implements OnInit {

  constructor(private apiService: ApiService, private nav: NavbarService) {
    this.nav.testActive()
  }
  countOfTests;
  ngOnInit() {

  }


  onSubmitSpeaking() {
    const body = {
      email: localStorage.getItem('email'),
      testNumber: localStorage.getItem('testNumber'),
      testStatusUpdate: "speaking"
    }
    this.apiService.updateTestData(body).subscribe((data: any) => {
      // console.log(data);
                  
    })
  }

}
