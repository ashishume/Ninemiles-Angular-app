import { ApiService } from 'src/app/shared/services/api.service';
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
    this.countOfTests = this.apiService.getCountOfTests();

  }

}
