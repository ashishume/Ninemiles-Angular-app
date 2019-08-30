import { ApiService } from 'src/app/shared/services/api.service';
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
    this.countOfTests = this.apiService.getCountOfTests();
    console.log(localStorage.getItem('testNumber'))

  }

}
