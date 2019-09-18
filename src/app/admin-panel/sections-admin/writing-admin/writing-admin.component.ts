import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { NavbarService } from 'src/app/shared/services/navbar-service/navbar.service';
import { Router } from '@angular/router';
import { ErrorServiceService } from 'src/app/shared/services/error-service/error-service.service';

@Component({
  selector: 'app-writing-admin',
  templateUrl: './writing-admin.component.html',
  styleUrls: ['./writing-admin.component.css']
})
export class WritingAdminComponent implements OnInit {

  timeLeft: number = 60;
  interval;
  public WritingSection: FormGroup;
  constructor(
    private apiService: ApiService,
    private nav: NavbarService,
    private route: Router,
    private fb: FormBuilder,
    private snack: ErrorServiceService
  ) {
    // this.nav.testActive()

    this.WritingSection = this.fb.group(
      {
        section1answer: new FormControl('', []),
        section2answer: new FormControl('', []),
      },
    );
  }
  section1paragraphDetails = [];
  section2paragraphDetails = [];
  section3paragraphDetails = []
  section4paragraphDetails = []
  userType = "Academic Students";
  testNumber = 1;
  type = [];
  countOfTests = []


  changeUserType(list) {
    this.userType = list;
    this.ngOnInit()
  }
  changeTestNumber(test) {
    this.testNumber = test;
    this.ngOnInit()
  }


  ngOnInit() {


    this.type = [
      "Academic Students",
      "General Students"
    ]
    this.countOfTests = this.apiService.numberOfTests();



    var userType = this.userType;
    var testNumber = this.testNumber;


    this.apiService.getListOfParagraph().subscribe((response: any) => {
      if (response.status == 200) {
        let section1paragraphDetails = []
        let section2paragraphDetails = []
        let section3paragraphDetails = []
        let section4paragraphDetails = []

        response.body.forEach(function (value) {
          if (value.section == '1' && "Writing" == value.paragraphSectionCategory && testNumber == value.testNumber && value.paragraphUserType == userType) {
            section1paragraphDetails.push(value);
          }
          if (value.section == '2' && "Writing" == value.paragraphSectionCategory && testNumber == value.testNumber && value.paragraphUserType == userType) {
            section2paragraphDetails.push(value);
          }
          if (value.section == '3' && userType == value.paragraphUserType && testNumber == value.testNumber && value.paragraphSectionCategory == "Writing") {
            section3paragraphDetails.push(value);
          }
          if (value.section == '4' && userType == value.paragraphUserType && testNumber == value.testNumber && value.paragraphSectionCategory == "Writing") {
            section4paragraphDetails.push(value);
          }
        })
        this.section1paragraphDetails = section1paragraphDetails;
        this.section2paragraphDetails = section2paragraphDetails;
        this.section3paragraphDetails = section3paragraphDetails;
        this.section4paragraphDetails = section4paragraphDetails;

      }
    })

  }





  editParagraph(list) {
    this.apiService.passDataValues(list);
    this.route.navigate(['admin-panel/add-paragraph'])
  }


}
