import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info-page',
  templateUrl: './info-page.component.html',
  styleUrls: ['./info-page.component.css']
})
export class InfoPageComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  studentTypes=[];

  ngOnInit() {
    this.studentTypes = this.apiService.getStudentTypes()
  }

}
