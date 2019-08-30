import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {

  constructor(private apiService:ApiService) { }
countOfTests;
  ngOnInit() {

  }

}
