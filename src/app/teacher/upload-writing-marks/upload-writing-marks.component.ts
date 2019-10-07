import { Component, OnInit } from '@angular/core';
import { CalculateMarksService } from 'src/app/shared/services/calculate-marks/calculate-marks.service';
import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { EmailService } from 'src/app/shared/services/email/email.service';

@Component({
  selector: 'app-upload-writing-marks',
  templateUrl: './upload-writing-marks.component.html',
  styleUrls: ['./upload-writing-marks.component.css']
})
export class UploadWritingMarksComponent implements OnInit {
  public AnswerGroup: FormGroup;
  StudentDetails = [];
  listUserTypes = [];
  constructor(
    private calculate: CalculateMarksService,
    private apiService: ApiService,
    private fb: FormBuilder,
    private email: EmailService
  ) {

    this.AnswerGroup = this.fb.group(
      {
        studentDetails: new FormControl('', [Validators.required]),
        testNumber: new FormControl('', [Validators.required]),
        marksBand: new FormControl('', [Validators.required]),
      },
    );

  }

  dropdownOptions = []
  countOfTests = [];
  config = {
    displayKey: "name",
    search: true,
    height: 'auto',
    placeholder: 'Select',
    customComparator: () => { },
    limitTo: 5,
    moreText: 'more',
    noResultsFound: 'No results found!',
    searchPlaceholder: 'Search',
    searchOnKey: 'email'
  }
  ngOnInit() {
    this.listUserTypes = this.apiService.getStudentTypes()
    this.countOfTests = this.apiService.numberOfTests()
    let tempDropDown = []
    this.apiService.listAllUsers().subscribe((data: any) => {
      if (data.status == 200) {
        this.StudentDetails = data.body;
        this.StudentDetails.forEach(function (value) {
          if (value.userType == "Academic Students" || value.userType == "General Students") {
            tempDropDown.push(value);
          }
        })
        this.dropdownOptions = tempDropDown;
      }
    })

  }

  onSubmitAnswer(MarksForm) {
    const formData = MarksForm.value;
    const body = {
      email: formData.studentDetails.email,
      testNumber: formData.testNumber,
      section: "writing",
      marksBand: formData.marksBand,
      countOfCorrectAnswers: 0,
      userType: formData.studentDetails.userType
    }

    const email = formData.studentDetails.email;
    const name = formData.studentDetails.name;
    const subject = "Answer sheet is checked,Please check your score";


    this.email.sendWritingMarks(name, email, subject)
    this.calculate.calculateWritingSectionMarks(body)

  }
}
