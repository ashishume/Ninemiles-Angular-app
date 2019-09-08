import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  countOfTests;
  ngOnInit() {

  }


  onSubmitWriting() {
    const body = {
      email: localStorage.getItem('email'),
      testNumber: localStorage.getItem('testNumber'),
      testStatusUpdate:"writing"
    }
    this.apiService.updateTestData(body).subscribe((data: any) => {
      // console.log(data);

    })
  }
}
