import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { NavbarService } from 'src/app/shared/services/navbar-service/navbar.service';
import { ReadingService } from '../shared/reading-shared/reading.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.css']
})
export class ReadingComponent implements OnInit {

  countOfTests;
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
    private readingService: ReadingService,
    private nav: NavbarService,
    private route: Router
  ) {
    this.nav.hide()
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
  ngOnInit() {

    // @HostListener('window:beforeunload')
    // onBeforeUnload() {
    //   return false;
    // }

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

    var userType = localStorage.getItem('userType');
    var testNumber = localStorage.getItem('testNumber');
    this.apiService.getListOfQuestions().subscribe((response: any) => {
      if (response.status == 200) {

        response.body.forEach(function (value) {

          if (value.section == "1" && userType == value.questionUserType && value.sectionCategory == "Reading" && testNumber == value.testNumber) {
            section1Questions.push(value);
            if (value.questionType == "Select in the blanks") {
              section1SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section1TypeQuestionsId.push(value._id)
            }

          } else if (value.section == "2" && userType == value.questionUserType && value.sectionCategory == "Reading" && testNumber == value.testNumber) {
            if (value.questionType == "Select in the blanks") {
              section2SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section2TypeQuestionsId.push(value._id)
            }
            section2Questions.push(value);
          } else if (value.section == "3" && userType == value.questionUserType && value.sectionCategory == "Reading" && testNumber == value.testNumber) {
            if (value.questionType == "Select in the blanks") {
              section3SelectQuestionsId.push(value._id);
            }
            if (value.questionType == "Type in the blanks") {
              section3TypeQuestionsId.push(value._id)
            }
            section3Questions.push(value);
          } else if (value.section == "4" && userType == value.questionUserType && value.sectionCategory == "Reading" && testNumber == value.testNumber) {
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
      }
    })

    this.apiService.getListOfParagraph().subscribe((response: any) => {
      if (response.status == 200) {
        let section1paragraphDetails = []
        let section2paragraphDetails = []
        let section3paragraphDetails = []
        let section4paragraphDetails = []
        response.body.forEach(function (value) {
          if (value.section == '1' && userType == value.paragraphUserType && testNumber == value.testNumber) {
            section1paragraphDetails.push(value);
          }
          if (value.section == '2' && userType == value.paragraphUserType && testNumber == value.testNumber) {
            section2paragraphDetails.push(value);
          }
          if (value.section == '3' && userType == value.paragraphUserType && testNumber == value.testNumber) {
            section3paragraphDetails.push(value);
          }
          if (value.section == '4' && userType == value.paragraphUserType && testNumber == value.testNumber) {
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



  checkOptionStatus(listOption, section, $event) {
    this.readingService.checkOptionStatus(listOption, section, $event);
  }

  onSubmitOfReadingSection(value) {
    // console.log(value.value);

  }

  //********************************************************************************************
  //SELECT QUESTIONS
  checkSelectOptionStatus1(fullOption, selectedItem, section, id, selectedIndex) {
    this.readingService.checkSelectOptionStatus1(fullOption, selectedItem, section, id, selectedIndex, this.section1SelectQuestionsId)
  }
  checkSelectOptionStatus2(fullOption, selectedItem, section, id, selectedIndex) {
    this.readingService.checkSelectOptionStatus2(fullOption, selectedItem, section, id, selectedIndex, this.section2SelectQuestionsId)
  }
  checkSelectOptionStatus3(fullOption, selectedItem, section, id, selectedIndex) {
    this.readingService.checkSelectOptionStatus3(fullOption, selectedItem, section, id, selectedIndex, this.section3SelectQuestionsId)
  }
  checkSelectOptionStatus4(fullOption, selectedItem, section, id, selectedIndex) {
    this.readingService.checkSelectOptionStatus4(fullOption, selectedItem, section, id, selectedIndex, this.section4SelectQuestionsId)
  }

  // ******************************************************************************************
  //TYPE QUESTIONS
  checkTypeOptionStatus1(fullOption, selectedItem, section, id, selectedIndex) {
    var selectedOption = selectedItem.target.value.toUpperCase();
    this.readingService.checkTypeOptionStatus1(fullOption, selectedOption, section, id, selectedIndex, this.section1TypeQuestionsId)
  }
  checkTypeOptionStatus2(fullOption, selectedItem, section, id, selectedIndex) {
    var selectedOption = selectedItem.target.value.toUpperCase();
    this.readingService.checkTypeOptionStatus2(fullOption, selectedOption, section, id, selectedIndex, this.section2TypeQuestionsId)
  }
  checkTypeOptionStatus3(fullOption, selectedItem, section, id, selectedIndex) {
    var selectedOption = selectedItem.target.value.toUpperCase();
    this.readingService.checkTypeOptionStatus3(fullOption, selectedOption, section, id, selectedIndex, this.section3TypeQuestionsId)
  }
  checkTypeOptionStatus4(fullOption, selectedItem, section, id, selectedIndex) {
    var selectedOption = selectedItem.target.value.toUpperCase();
    this.readingService.checkTypeOptionStatus4(fullOption, selectedOption, section, id, selectedIndex, this.section4TypeQuestionsId)
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


  timeLeft: number = 60;
  interval;
  checkTimerStatus(event) {
    console.log(event);
    if (event.left == 0) {
      this.route.navigate(['dashboard'])
    }
  }





}
