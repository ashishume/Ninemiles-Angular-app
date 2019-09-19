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
  }

  continueToSection() {
    if (this.data == "writing") {
      this.route.navigate(['section/writing'])
    } else if (this.data == "reading") {
      this.route.navigate(['section/reading'])
    } else if (this.data == "speaking") {
      this.route.navigate(['section/speaking'])

    } else if (this.data == "listening") {
      this.route.navigate(['section/listening'])
    }
    else if (this.data == "upload") {
      this.route.navigate(['section/upload-writing'])
    }

  }





}
