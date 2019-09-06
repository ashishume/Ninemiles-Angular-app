import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';

@Component({
  selector: 'app-add-paragraph',
  templateUrl: './add-paragraph.component.html',
  styleUrls: ['./add-paragraph.component.css']
})
export class AddParagraphComponent implements OnInit {





  listOfTests;
  section = [];
  paragraphUserType = []
  public AddParagraph: FormGroup;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private snack: MatSnackBar
  ) {
    this.section = this.apiService.getCountOfSection()
    this.paragraphUserType = this.apiService.getStudentTypes()

    this.AddParagraph = this.fb.group(
      {
        paragraphTitle: new FormControl('', [Validators.required]),
        section: new FormControl('', [Validators.required]),
        paragraphUserType: new FormControl('', [Validators.required]),
        testDetails: new FormControl('', [Validators.required]),
        paragraphHeading: new FormControl('', [Validators.required]),
      },
    );
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.AddParagraph.controls[controlName].hasError(errorName);
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
  onSubmitParagraph(AddParagraph) {

    var formValue = AddParagraph.value;

    const body = {
      author: "ashishume@gmail.com",
      paragraphTitle: formValue.paragraphTitle,
      paragraphHeading: formValue.paragraphHeading,
      paragraphUserType: formValue.paragraphUserType,
      section: formValue.section,
      testNumber: formValue.testDetails.testNumber
    }

    this.apiService.insertParagraph(body).subscribe((data: any) => {
      this.snack.openFromComponent(SnackBarComponent, {
        duration: 3 * 1000,
        data: "Question Added Successfully"
      });
    })
  }
}
