import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-sections-admin',
  templateUrl: './sections-admin.component.html',
  styleUrls: ['./sections-admin.component.css']
})
export class SectionsAdminComponent implements OnInit {

  testDetails = [];
  constructor(
    private route: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('Sections-Admin')
   }
  ngOnInit() {

  }

  handlingWriting() {
    this.route.navigate(['admin-panel/writing-admin'])
  }

  handlingReading() {
    this.route.navigate(['admin-panel/reading-admin'])
  }
  // handlingSpeaking() {
  //   this.route.navigate(['admin-panel/speaking-admin'])
  // }
  handlingListening() {
    this.route.navigate(['admin-panel/listening-admin'])
  }


}
