import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';

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


  public firstSectionTest: FormGroup;
  constructor(private apiService: ApiService,
    private fb: FormBuilder,
  ) {
    this.firstSectionTest = this.fb.group(
      {
        section1: new FormControl('', [Validators.required]),
        section2: new FormControl('', [Validators.required]),
        section3: new FormControl('', [Validators.required]),
        section4: new FormControl('', [Validators.required]),
        
      },
    );
  }




  public hasError = (controlName: string, errorName: string) => {
    return this.firstSectionTest.controls[controlName].hasError(errorName);
  }


  ngOnInit() {
    this.presentTestNumber = parseInt(localStorage.getItem('testNumber'));

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
          } else if (value.section == "2" && userType == value.questionUserType && value.sectionCategory == "Reading" && testNumber == value.testNumber) {
            section2Questions.push(value);
          } else if (value.section == "3" && userType == value.questionUserType && value.sectionCategory == "Reading" && testNumber == value.testNumber) {
            section3Questions.push(value);
          } else if (value.section == "4" && userType == value.questionUserType && value.sectionCategory == "Reading" && testNumber == value.testNumber) {
            section4Questions.push(value);
          }
        })
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

  tempArray :any= []
  checkOptionStatus(optionValue, listSection,event) {
    console.log(listSection);
    
    if (event.checked == true) {
      this.tempArray.push({answer:optionValue,answerSection:parseInt(listSection)})
    } else {

      for (var i = 0; i < this.tempArray.length; i++) {
        if (this.tempArray[i].answer === optionValue) {
          this.tempArray.splice(i, 1);
        }
      }
    }
    console.log(this.tempArray);

  }

  onSubmitOfSection() {
    console.log(this.tempArray);

    // console.log("onsubmit",this.tempArray);

  }


  // onSubmitReading() {
  //   const body = {
  //     email: localStorage.getItem('email'),
  //     testNumber: localStorage.getItem('testNumber'),
  //     testStatusUpdate: "reading"
  //   }
  //   this.apiService.updateTestData(body).subscribe((data: any) => {
  //     console.log(data);

  //   })
  // }




  // *******************************************************************

  // focusedColor = "red"
  // focusedSection1 = { "background-color": this.focusedColor };
  // focusedSection2 = {};
  // focusedSection3 = {};
  // focusedSection4 = {};

  // sectionTab1 = true;
  // sectionTab2 = false;
  // sectionTab3 = false;
  // sectionTab4 = false;

  // showSection1() {
  //   this.sectionTab1 = true;
  //   this.sectionTab2 = false;
  //   this.sectionTab3 = false;
  //   this.sectionTab4 = false;
  //   this.focusedSection1 = { "background-color": this.focusedColor };
  //   this.focusedSection2 = { "background-color": "" };
  //   this.focusedSection3 = { "background-color": "" };
  //   this.focusedSection4 = { "background-color": "" };
  // }
  // showSection2() {
  //   this.sectionTab1 = false;
  //   this.sectionTab2 = true;
  //   this.sectionTab3 = false;
  //   this.sectionTab4 = false;
  //   this.focusedSection1 = { "background-color": "" };
  //   this.focusedSection2 = { "background-color": this.focusedColor };
  //   this.focusedSection3 = { "background-color": "" };
  //   this.focusedSection4 = { "background-color": "" };

  // }
  // showSection3() {
  //   this.sectionTab1 = false;
  //   this.sectionTab2 = false;
  //   this.sectionTab3 = true;
  //   this.sectionTab4 = false;
  //   this.focusedSection1 = { "background-color": "" };
  //   this.focusedSection2 = { "background-color": "" };
  //   this.focusedSection3 = { "background-color": this.focusedColor };
  //   this.focusedSection4 = { "background-color": "" };
  // }
  // showSection4() {
  //   this.sectionTab1 = false;
  //   this.sectionTab2 = false;
  //   this.sectionTab3 = false;
  //   this.sectionTab4 = true;
  //   this.focusedSection1 = { "background-color": "" };
  //   this.focusedSection2 = { "background-color": "" };
  //   this.focusedSection3 = { "background-color": "" };
  //   this.focusedSection4 = { "background-color": this.focusedColor };
  // }



}
