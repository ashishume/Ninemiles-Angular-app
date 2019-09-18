import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/shared/services/api-service/api.service';

@Component({
  selector: 'app-sections-admin',
  templateUrl: './sections-admin.component.html',
  styleUrls: ['./sections-admin.component.css']
})
export class SectionsAdminComponent implements OnInit {

  testDetails = [];
  constructor(
    private route: Router,
    private apiService: ApiService,
  ) { }
  ngOnInit() {
    const query = {
      email: localStorage.getItem('email')
    }
    const testNumber = parseInt(localStorage.getItem('testNumber'))
    this.apiService.showTestData(query).subscribe((data: any) => {
      if (data.status == 200) {
        data.body.testDetails.forEach(value => {
          if (value.testNumber == testNumber) {
            this.testDetails.push(value);
          }
        });
      }
    })
  }

  handlingWriting() {
    this.route.navigate(['admin-panel/writing-admin'])
  }

  handlingReading() {
    this.route.navigate(['admin-panel/reading-admin'])
  }
  handlingSpeaking() {
    this.route.navigate(['admin-panel/speaking-admin'])
  }
  handlingListening() {
    this.route.navigate(['admin-panel/listening-admin'])
  }


}
