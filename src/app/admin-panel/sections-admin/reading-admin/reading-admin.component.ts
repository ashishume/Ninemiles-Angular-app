import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { ReadingService } from 'src/app/section/shared/reading-shared/reading.service';
import { NavbarService } from 'src/app/shared/services/navbar-service/navbar.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-reading-admin',
  templateUrl: './reading-admin.component.html',
  styleUrls: ['./reading-admin.component.css']
})
export class ReadingAdminComponent implements OnInit {


  questions = [];
  presentTestNumber;
  section1paragraphDetails = [];
  section2paragraphDetails = [];
  section3paragraphDetails = [];
  section4paragraphDetails = [];

  section1Questions = [];
  section2Questions = [];
  section3Questions = [];
  section4Questions = [];


  public ReadingSection: FormGroup;
  constructor(private apiService: ApiService,
    private fb: FormBuilder,
    private nav: NavbarService,
    private route: Router,
    private titleService: Title
  ) {
    this.titleService.setTitle('Reading-Admin')
    // this.nav.testActive()
    this.ReadingSection = this.fb.group(
      {
        mcqAnswers: new FormControl('', []),
      },
    );
  }




  public hasError = (controlName: string, errorName: string) => {
    return this.ReadingSection.controls[controlName].hasError(errorName);
  }

  section1SelectQuestionsId = [];
  section2SelectQuestionsId = [];
  section3SelectQuestionsId = [];
  section4SelectQuestionsId = [];

  section1TypeQuestionsId = [];
  section2TypeQuestionsId = [];
  section3TypeQuestionsId = [];
  section4TypeQuestionsId = [];

  type = []
  countOfTests = [];
  userType = "Academic Students";
  testNumber = 1;



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
    this.presentTestNumber = parseInt(localStorage.getItem('testNumber'));
    let section1SelectQuestionsId = [];
    let section2SelectQuestionsId = [];
    let section3SelectQuestionsId = [];
    let section4SelectQuestionsId = [];

    let section1TypeQuestionsId = [];
    let section2TypeQuestionsId = [];
    let section3TypeQuestionsId = [];
    let section4TypeQuestionsId = [];

    let section1Questions = [];
    let section2Questions = [];
    let section3Questions = [];
    let section4Questions = [];

    var userType = this.userType;
    var testNumber = this.testNumber;
    const query = {
      userType: userType,
      sectionCategory: "Reading",
      testNumber: testNumber
    }


    this.apiService.getListOfQuestions(query).subscribe((response: any) => {
      if (response.status == 200) {

        response.body.forEach(function (value) {

          if (value.section == "1") {
            section1Questions.push(value);
            if (value.questionType == "Select in the blanks") {
              section1SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section1TypeQuestionsId.push(value._id)
            }

          } else if (value.section == "2") {
            if (value.questionType == "Select in the blanks") {
              section2SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section2TypeQuestionsId.push(value._id)
            }
            section2Questions.push(value);
          } else if (value.section == "3") {
            if (value.questionType == "Select in the blanks") {
              section3SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section3TypeQuestionsId.push(value._id)
            }
            section3Questions.push(value);
          } else if (value.section == "4") {
            if (value.questionType == "Select in the blanks") {
              section4SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section4TypeQuestionsId.push(value._id)
            }
            section4Questions.push(value);
          }

        })
        //SELECT OPTIONS
        this.section1SelectQuestionsId = section1SelectQuestionsId;
        this.section2SelectQuestionsId = section2SelectQuestionsId;
        this.section3SelectQuestionsId = section3SelectQuestionsId;
        this.section4SelectQuestionsId = section4SelectQuestionsId;


        //TYPE THE OPTIONS
        this.section1TypeQuestionsId = section1TypeQuestionsId;
        this.section2TypeQuestionsId = section2TypeQuestionsId;
        this.section3TypeQuestionsId = section3TypeQuestionsId;
        this.section4TypeQuestionsId = section4TypeQuestionsId;


        //QUESTIONS ADDED
        this.section1Questions = section1Questions;
        this.section2Questions = section2Questions;
        this.section3Questions = section3Questions;
        this.section4Questions = section4Questions;

        console.log(section1Questions);
        console.log(section2Questions);
        console.log(section3Questions);
        console.log(section4Questions);
        


      }
      else if (response.status == 204) {
        this.section1Questions = [];
        this.section2Questions = [];
        this.section3Questions = [];
        this.section4Questions = [];
      }
    })

    const params = {
      paragraphUserType: userType,
      testNumber: testNumber,
      paragraphSectionCategory: "Reading"
    }
    this.apiService.getListOfParagraph(params).subscribe((response: any) => {
      if (response.status == 200) {
        let section1paragraphDetails = []
        let section2paragraphDetails = []
        let section3paragraphDetails = []
        let section4paragraphDetails = []
        response.body.forEach(function (value) {
          if (value.section == '1') {
            section1paragraphDetails.push(value);
          }
          if (value.section == '2') {
            section2paragraphDetails.push(value);
          }
          if (value.section == '3') {
            section3paragraphDetails.push(value);
          }
          if (value.section == '4') {
            section4paragraphDetails.push(value);
          }
        })
        this.section1paragraphDetails = section1paragraphDetails;
        this.section2paragraphDetails = section2paragraphDetails;
        this.section3paragraphDetails = section3paragraphDetails;
        this.section4paragraphDetails = section4paragraphDetails;


      }
      else if (response.status == 204) {
        this.section1paragraphDetails = [];
        this.section2paragraphDetails = [];
        this.section3paragraphDetails = [];
        this.section4paragraphDetails = [];
      }
    })
  }



  editParagraph(list) {
    this.apiService.passDataValues(list);
    this.route.navigate(['admin-panel/add-paragraph'])
  }

  editQuestion(list) {
    if (list.questionType == "MCQ") {
      this.apiService.passDataValues(list);
      this.route.navigate(['admin-panel/add-questions'])
    } else {
      this.apiService.passDataValues(list);
      this.route.navigate(['admin-panel/add-fill-blank-questions'])
    }
  }




}
