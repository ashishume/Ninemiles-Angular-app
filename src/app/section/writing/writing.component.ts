import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar-service/navbar.service';
import { Router } from '@angular/router';
import { FormControl, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-writing',
  templateUrl: './writing.component.html',
  styleUrls: ['./writing.component.css']
})
export class WritingComponent implements OnInit {
  timeLeft: number = 60;
  interval;
  public WritingSection: FormGroup;
  constructor(
    private apiService: ApiService,
    private nav: NavbarService,
    private route: Router,
    private fb: FormBuilder,
  ) {
    this.nav.hide()

    this.WritingSection = this.fb.group(
      {
        section1answer: new FormControl('', []),
        section2answer: new FormControl('', []),
      },
    );
  }
  section1paragraphDetails = [];
  section2paragraphDetails = [];

  ngOnInit() {

    // @HostListener('window:beforeunload')
    // onBeforeUnload() {
    //   return false;
    // }
    var userType = localStorage.getItem('userType');
    var testNumber = localStorage.getItem('testNumber');


    this.apiService.getListOfParagraph().subscribe((response: any) => {
      if (response.status == 200) {
        let section1paragraphDetails = []
        let section2paragraphDetails = []

        response.body.forEach(function (value) {
          if (value.section == '1' && userType == value.paragraphUserType && testNumber == value.testNumber && value.paragraphSectionCategory == "Writing") {
            section1paragraphDetails.push(value);
          }
          if (value.section == '2' && userType == value.paragraphUserType && testNumber == value.testNumber && value.paragraphSectionCategory == "Writing") {
            section2paragraphDetails.push(value);
          }
        })
        this.section1paragraphDetails = section1paragraphDetails;
        this.section2paragraphDetails = section2paragraphDetails;

      }
    })

  }


  checkTimerStatus(event) {
    console.log(event);
    if (event.left == 0) {
      this.route.navigate(['dashboard'])
    }
  }




  editParagraph(list) {
    this.apiService.passDataValues(list);
    this.route.navigate(['admin-panel/add-paragraph'])
  }

  onSubmitOfWritingSection(formValue) {
    let answerArray = []
    answerArray.push({ answer: formValue.value.section1answer, section: 1 })
    answerArray.push({ answer: formValue.value.section2answer, section: 2 })
    const body = {
      submittedAnswer: answerArray,
      studentEmail: localStorage.getItem('email'),
      studentName: localStorage.getItem('name'),
      sectionCategory: "Writing",
      testNumber: localStorage.getItem('testNumber'),
      userType: localStorage.getItem('userType'),
    }

    console.log(body);
    this.apiService.submitWritingAnswer(body).subscribe((data: any) => {
      if (data.status == 200) {
        this.route.navigate(['dashboard'])
      }
    })


  }
}
