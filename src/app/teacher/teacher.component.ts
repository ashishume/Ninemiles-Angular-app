import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api-service/api.service';

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  StudentDetails = [];
  ngOnInit() {
    this.apiService.displayOnlineTestDetails().subscribe((data: any) => {
      console.log(data);
      if (data.status == 200) {
        this.StudentDetails = data.body;
      }
      console.log(this.StudentDetails);

    })

  }

}
