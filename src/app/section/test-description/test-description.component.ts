import { ApiService } from './../../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-description',
  templateUrl: './test-description.component.html',
  styleUrls: ['./test-description.component.css']
})
export class TestDescriptionComponent implements OnInit {

  constructor(private apiService: ApiService, private route: Router) { }
  data;
  updateBody;
  ngOnInit() {
    this.data = this.apiService.returnDataValues()
    if (!this.data)
      this.route.navigate(['dashboard'])

    this.updateBody = {
      email: localStorage.getItem('email'),
      "testNumber": parseInt(localStorage.getItem('testNumber'))
    }

  }

  continueToSection() {
    if (this.data == "writing") {
      this.updateBody.testStatusUpdate = "writing";
      this.apiService.updateTestData(this.updateBody).subscribe((data: any) => {
        if (data.status == 200) {
          this.route.navigate(['section/writing'])
        }
      })
    } else if (this.data == "reading") {
      this.updateBody.testStatusUpdate = "reading";
      this.apiService.updateTestData(this.updateBody).subscribe((data: any) => {
        if (data.status == 200) {
          this.route.navigate(['section/reading'])
        }
      })
    } else if (this.data == "speaking") {
      this.updateBody.testStatusUpdate = "speaking";
      this.apiService.updateTestData(this.updateBody).subscribe((data: any) => {
        if (data.status == 200) {
          this.route.navigate(['section/speaking'])
        }
      })

    } else if (this.data == "listening") {
      this.updateBody.testStatusUpdate = "listening";
      this.apiService.updateTestData(this.updateBody).subscribe((data: any) => {
        if (data.status == 200) {
          this.route.navigate(['section/listening'])
        }
      })
    }
    else if (this.data == "upload") {
      this.updateBody.testStatusUpdate = "onlineWriting";
      this.apiService.updateTestData(this.updateBody).subscribe((data: any) => {
        if (data.status == 200) {
          this.route.navigate(['section/upload-writing'])

        }
      })
    }

  }





}
