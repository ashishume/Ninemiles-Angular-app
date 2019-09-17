import { ApiService } from './../../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-upload-writing',
  templateUrl: './show-upload-writing.component.html',
  styleUrls: ['./show-upload-writing.component.css']
})
export class ShowUploadWritingComponent implements OnInit {

  constructor(private apiService: ApiService) { }


  StudentDetails = [];

  ngOnInit() {

    this.apiService.displayOnlineTestDetails().subscribe((data: any) => {
      if (data.status == 200) {
        this.StudentDetails = data.body;
      }
    })

  }

}
