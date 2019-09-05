import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { NavbarService } from 'src/app/shared/services/navbar-service/navbar.service';
import { ReadingService } from '../shared/reading-shared/reading.service';

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
    private nav: NavbarService
  ) {
    this.nav.hide()
    this.ReadingSection = this.fb.group(
      {
        mcqAnswers: new FormControl('', []),
        // selectAnswers:this.ReadingSection.FormArray()

      },
    );
  }




  public hasError = (controlName: string, errorName: string) => {
    return this.ReadingSection.controls[controlName].hasError(errorName);
  }

  section1SelectQuestionsLength = [];
  section2SelectQuestionsLength = [];
  section3SelectQuestionsLength = [];
  section4SelectQuestionsLength = [];
  ngOnInit() {
    this.presentTestNumber = parseInt(localStorage.getItem('testNumber'));

    let section1SelectQuestionsLength = [];
    let section2SelectQuestionsLength = [];
    let section3SelectQuestionsLength = [];
    let section4SelectQuestionsLength = [];
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
              section1SelectQuestionsLength.push(value.options.length);
            }

          } else if (value.section == "2" && userType == value.questionUserType && value.sectionCategory == "Reading" && testNumber == value.testNumber) {
            if (value.questionType == "Select in the blanks") {
              section2SelectQuestionsLength.push(value.options.length);
            }
            section2Questions.push(value);
          } else if (value.section == "3" && userType == value.questionUserType && value.sectionCategory == "Reading" && testNumber == value.testNumber) {
            if (value.questionType == "Select in the blanks") {
              section3SelectQuestionsLength.push(value.options.length);
            }
            section3Questions.push(value);
          } else if (value.section == "4" && userType == value.questionUserType && value.sectionCategory == "Reading" && testNumber == value.testNumber) {
            if (value.questionType == "Select in the blanks") {
              section4SelectQuestionsLength.push(value.options.length);
            }
            section4Questions.push(value);
          }

        })

        this.section1SelectQuestionsLength = section1SelectQuestionsLength;
        this.section2SelectQuestionsLength = section2SelectQuestionsLength;
        this.section3SelectQuestionsLength = section3SelectQuestionsLength;
        this.section4SelectQuestionsLength = section4SelectQuestionsLength;
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


  onSubmitOfReadingSection(value) {
    console.log(value.value);

  }

  checkSelectOptionStatus1(fullOption, selectedItem, section, length, selectedIndex) {
    this.readingService.checkSelectOptionStatus1(fullOption, selectedItem, section, length, selectedIndex, this.section1SelectQuestionsLength)
  }
 
  checkSelectOptionStatus2(fullOption, selectedItem, section, length, selectedIndex) {
    this.readingService.checkSelectOptionStatus2(fullOption, selectedItem, section, length, selectedIndex, this.section2SelectQuestionsLength)
  }
 
  checkSelectOptionStatus3(fullOption, selectedItem, section, length, selectedIndex) {
    this.readingService.checkSelectOptionStatus3(fullOption, selectedItem, section, length, selectedIndex, this.section3SelectQuestionsLength)
  }
 
  checkSelectOptionStatus4(fullOption, selectedItem, section, length, selectedIndex) {
    this.readingService.checkSelectOptionStatus4(fullOption, selectedItem, section, length, selectedIndex, this.section4SelectQuestionsLength)
  }
 
  checkOptionStatus(optionValue, section, event) {
    this.readingService.checkOptionStatus(optionValue, section, event)

  }


}
