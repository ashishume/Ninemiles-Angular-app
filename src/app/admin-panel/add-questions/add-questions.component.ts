import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm, FormArray, ValidatorFn } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})


export class AddQuestionsComponent implements OnInit {

  listOfQuestionTypes = []
  public AddQuestion: FormGroup;
  countOfInput = []
  listOfTests;
  index = 1;
  editObject;
  // *******************************************

  questionTitle;
  option;
  optionStatus;
  section = []
  sectionCategory = [];
  questionUserType = [];
  testNumber;




  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private route: Router
  ) {

    if (this.apiService.returnDataValues()) {

      this.editObject = this.apiService.returnDataValues();
      console.log(this.editObject);

    }

    if (this.editObject) {
      this.questionTitle = this.editObject.questionTitle;
    }
    // this.listOfTests = this.apiService.getCountOfTests();
    this.section = this.apiService.getCountOfSection();
    this.questionUserType = this.apiService.getStudentTypes();
    this.listOfQuestionTypes = this.apiService.getQuestionTypes();
    this.sectionCategory = this.apiService.getSectionCategory()


    this.AddQuestion = this.fb.group(
      {
        questionTitle: new FormControl('', [Validators.required]),
        section: new FormControl('', [Validators.required]),
        testNumber: new FormControl('', [Validators.required]),
        questionUserType: new FormControl('', [Validators.required]),
        sectionCategory: new FormControl('', [Validators.required]),
        options: this.fb.array([this.addOtherSkillFormGroup()])

      },
    );
  }

  get formData() { return <FormArray>this.AddQuestion.get('options'); }


  addButtonClick(): void {
    (<FormArray>this.AddQuestion.get('options')).push(this.addOtherSkillFormGroup());
  }
  removeButtonClick(): void {
    (<FormArray>this.AddQuestion.get('options')).removeAt(0);
  }


  addOtherSkillFormGroup(): FormGroup {
    return this.fb.group({
      option: new FormControl('', [Validators.required]),
      optionStatus: new FormControl('', [])
    });
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.AddQuestion.controls[controlName].hasError(errorName);
  }
  ngOnInit() {
    const query = {
      email: localStorage.getItem('email')
    }
    this.apiService.showTestData(query).subscribe((data: any) => {
      let tempArray = []
      if (data.status == 200) {
        data.body.testDetails.forEach(function (value) {
          tempArray.push(value)
        })
        this.listOfTests = tempArray;
      }
    })

  }
  onSubmitQuestion(AddQuestion) {

    if (!this.editObject) {
      let tempArray: any = []
      tempArray = AddQuestion.value.options;
      if (AddQuestion.value.options) {
        for (var i = 0; i < tempArray.length; i++) {
          if (tempArray[i].optionStatus == false) {
            tempArray[i].optionStatus = false;
          }
        }
      }
      AddQuestion.value.author = localStorage.getItem('email')
      AddQuestion.value.questionType = 1;

      this.apiService.insertQuestion(AddQuestion.value).subscribe((data: any) => {
        if (data.status == 200) {
          this.snack.openFromComponent(SnackBarComponent, {
            duration: 3 * 1000,
            data: "Question Added Successfully"
          });
        }
      })
    } else {
      var Question = AddQuestion.value;

      var section;
      var testNumber;
      let options = [];
      var questionUserType;
      var sectionCategory;

      if (!Question.section) {
        section = this.editObject.section;
      } else {
        section = Question.section;
      }
      if (Question.options.length <= 1) {
        options = this.editObject.options;
      } else {

        for (var i = 0; i < Question.options.length; i++) {
          if (Question.options[i].optionStatus == false) {
            Question.options[i].optionStatus = false;
          }
        }
        options = Question.options;
      }
      if (!Question.questionUserType) {
        questionUserType = this.editObject.questionUserType;
      } else {
        questionUserType = Question.questionUserType;
      }
      if (!Question.testNumber) {
        testNumber = this.editObject.testNumber;
      } else {
        testNumber = Question.testNumber;
      }
      if (!Question.sectionCategory) {
        sectionCategory = this.editObject.sectionCategory;
      } else {
        sectionCategory = Question.sectionCategory;
      }

      var body = {
        _id: this.editObject._id,
        questionTitle: Question.questionTitle,
        options: options,
        questionType: 1,
        author: localStorage.getItem('email'),
        section: parseInt(section),
        questionUserType: questionUserType,
        testNumber: parseInt(testNumber),
        sectionCategory: sectionCategory,

      }
      this.apiService.updateTestData(body).subscribe((data: any) => {
        if (data.status == 200) {
          this.snack.openFromComponent(SnackBarComponent, {
            duration: 3 * 1000,
            data: "Question Updated Successfully"
          });
        }
      })

    }
  }




  deleteQuestion() {
    const params = {
      _id: this.editObject._id
    }
    this.apiService.deleteQuestion(params).subscribe((data: any) => {
      if (data.status == 200) {
        this.route.navigate(['dashboard'])
      }
    })
  }

}
