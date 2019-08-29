import { ApiService } from './../../shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listening',
  templateUrl: './listening.component.html',
  styleUrls: ['./listening.component.css']
})
export class ListeningComponent implements OnInit {

  constructor(private apiService:ApiService) { }
countOfTests;
  ngOnInit() {
    this.countOfTests = this.apiService.getCountOfTests();

  }
  onSubmitListening(){
    const body={
      email:localStorage.getItem('email'),
      testDetails:[
        {testNumber:2,testStatus:true}
      ]
    }
    this.apiService.updateTestData(body).subscribe((data:any)=>{
      console.log(data);
      
    })
  }
}
