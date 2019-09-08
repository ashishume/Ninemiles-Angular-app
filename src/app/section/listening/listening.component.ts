import { ApiService } from '../../shared/services/api-service/api.service';
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
  }
  onSubmitListening() {
    const body = {
      email: localStorage.getItem('email'),
      testNumber: localStorage.getItem('testNumber'),
      testStatusUpdate:"listening"
    }
    this.apiService.updateTestData(body).subscribe((data: any) => {
      // console.log(data);

    })
  }

}
