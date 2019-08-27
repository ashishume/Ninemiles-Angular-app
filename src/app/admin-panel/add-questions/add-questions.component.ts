import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, NgForm, FormArray, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})


export class AddQuestionsComponent implements OnInit {

  questionType = [
    "MCQ",
    "Matching Questions",
    "Long Questions",
    "Fill in the blanks"
  ]
  section = [
    1, 2, 3, 4
  ]
  questionUserType = [
    "Academic Students",
    "General Students"
  ]
  public AddQuestion: FormGroup;
  countOfInput = []
  index = 1;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
  ) {
    this.AddQuestion = this.fb.group(
      {
        questionTitle: new FormControl('', [Validators.required]),
        questionType: new FormControl('', [Validators.required]),
        section: new FormControl('', [Validators.required]),
        questionUserType: new FormControl('', [Validators.required]),
        options: this.fb.array([this.addOtherSkillFormGroup()])

      },
    );
  }
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

  }
  onSubmitQuestion(AddQuestion: NgForm) {
    console.log(AddQuestion.value);
    let tempArray: any = []
    tempArray = AddQuestion.value.options;
    if (AddQuestion.value.options) {
      for (var i = 0; i < tempArray.length; i++) {
        if (tempArray[i].optionStatus == false) {
          tempArray[i].optionStatus = false;
        }
      }

      AddQuestion.value.author = "ashishume@gmail.com"
      this.apiService.insertQuestion(AddQuestion.value).subscribe((data: any) => {
        console.log(data);
      })
    }

  }


  addMoreInputs() {
    this.countOfInput.push(this.index++);
    console.log(this.countOfInput);

  }
}
