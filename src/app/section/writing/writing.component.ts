import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit, HostListener } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar-service/navbar.service';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';
import { ErrorServiceService } from 'src/app/shared/services/error-service/error-service.service';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {

  // public WritingSection: FormGroup;
  constructor(
    private apiService: ApiService,
    private nav: NavbarService,
    private route: Router,
    // private fb: FormBuilder,
    private snack: ErrorServiceService
  ) {
    this.nav.testActive()
    this.apiService.checkTestStatus().subscribe((data: any) => {
      if (data.onlineWriting == true || data.writing == true) {
        this.route.navigate(['dashboard'])
        this.snack.showError("You have already given the test")
      }
    })
  }

  section1answer;
  section2answer;



  section1paragraphDetails = [];
  section2paragraphDetails = [];


  // ON REFRESH THE TEST WILL BE SUBMITTED
  @HostListener('window:beforeunload')
  onBeforeUnload() {
    this.onSubmitOfWritingSection()
    return false;
  }


  timeLeft: number = 3600;
  interval;
  checkTimerStatus(event) {
    if (event.left == 0) {
      this.onSubmitOfWritingSection()
    }
  }

  ngOnInit() {

    var userType = localStorage.getItem('userType');
    var testNumber = localStorage.getItem('testNumber');

    const query = {
      paragraphUserType: userType,
      testNumber: testNumber,
      paragraphSectionCategory: "Writing"
    }

    this.apiService.getListOfParagraph(query).subscribe((response: any) => {
      if (response.status == 200) {
        let section1paragraphDetails = []
        let section2paragraphDetails = []

        response.body.forEach(function (value) {
          if (value.section == '1') {
            section1paragraphDetails.push(value);
          }
          if (value.section == '2') {
            section2paragraphDetails.push(value);
          }
        })
        this.section1paragraphDetails = section1paragraphDetails;
        this.section2paragraphDetails = section2paragraphDetails;

      }
    })

  }




  editParagraph(list) {
    this.apiService.passDataValues(list);
    this.route.navigate(['admin-panel/add-paragraph'])
  }

  onSubmitOfWritingSection() {
    let answerArray = []
    answerArray.push({ answer: this.section1answer, section: 1 })
    answerArray.push({ answer: this.section2answer, section: 2 })
    const body = {
      submittedAnswer: answerArray,
      studentEmail: localStorage.getItem('email'),
      studentName: localStorage.getItem('name'),
      sectionCategory: "Writing",
      testNumber: localStorage.getItem('testNumber'),
      userType: localStorage.getItem('userType'),
    }

    this.apiService.submitWritingAnswer(body).subscribe((data: any) => {
      if (data.status == 200) {
        this.apiService.updateTestStatus("writing")
        this.route.navigate(['dashboard'])
      }
    })


  }
}
