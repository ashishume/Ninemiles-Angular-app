import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  focusedSection1 = { "background-color": "red" };
  focusedSection2 = {};
  focusedSection3 = {};
  constructor() {
  }

  section1 = true;
  section2 = false;
  section3 = false;

  showSection1() {
    this.section1 = true;
    this.section2 = false;
    this.section3 = false;
    this.focusedSection1 = { "background-color": "red" };
    this.focusedSection2 = { "background-color": "" };
    this.focusedSection3 = { "background-color": "" };
  }
  showSection2() {
    this.section1 = false;
    this.section2 = true;
    this.section3 = false;
    this.focusedSection1 = { "background-color": "" };
    this.focusedSection2 = { "background-color": "red" };
    this.focusedSection3 = { "background-color": "" };

  }
  showSection3() {
    this.section1 = false;
    this.section2 = false;
    this.section3 = true;
    this.focusedSection1 = { "background-color": "" };
    this.focusedSection2 = { "background-color": "" };
    this.focusedSection3 = { "background-color": "red" };
  }

  ngOnInit() { }

}
