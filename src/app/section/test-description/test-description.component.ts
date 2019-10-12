import { ApiService } from './../../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-test-description',
  templateUrl: './test-description.component.html',
  styleUrls: ['./test-description.component.css']
})
export class TestDescriptionComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    private route: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('Test Description')
  }
  section;
  updateBody;
  ngOnInit() {
    this.section = this.apiService.returnDataValues()
    if (!this.section)
      this.route.navigate(['dashboard'])
  }

  continueToSection() {
    if (this.section == "writing") {
      this.route.navigate(['section/writing'])
    } else if (this.section == "reading") {
      this.route.navigate(['section/reading'])
    } else if (this.section == "speaking") {
      this.route.navigate(['section/speaking'])

    } else if (this.section == "listening") {
      this.route.navigate(['section/listening'])
    }
    else if (this.section == "upload") {
      this.route.navigate(['section/upload-writing'])
    }

  }





}
