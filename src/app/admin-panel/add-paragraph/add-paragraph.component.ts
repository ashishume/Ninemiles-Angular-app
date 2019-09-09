import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { MatSnackBar } from '@angular/material';
import { SnackBarComponent } from 'src/app/shared/components/snack-bar/snack-bar.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-paragraph',
  templateUrl: './add-paragraph.component.html',
  styleUrls: ['./add-paragraph.component.css']
})
export class AddParagraphComponent implements OnInit {



  paragraphTitle;
  paragraphHeading;
  section = [];
  testDetails;
  paragraphUserType = [];
  listOfTests;
  editObject;
  getSectionCategory = [];
  public AddParagraph: FormGroup;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private snack: MatSnackBar,
    private route: Router
  ) {
    if (this.apiService.returnDataValues()) {
      this.editObject = this.apiService.returnDataValues();
      this.paragraphHeading = this.editObject.paragraphHeading;
      this.paragraphTitle = this.editObject.paragraphTitle;
    }

    this.getSectionCategory = this.apiService.getSectionCategory()
    this.section = this.apiService.getCountOfSection()
    this.paragraphUserType = this.apiService.getStudentTypes()

    this.AddParagraph = this.fb.group(
      {
        paragraphTitle: new FormControl('', [Validators.required]),
        section: new FormControl('', [Validators.required]),
        paragraphUserType: new FormControl('', [Validators.required]),
        testDetails: new FormControl('', [Validators.required]),
        paragraphHeading: new FormControl('', [Validators.required]),
        paragraphSectionCategory: new FormControl('', []),
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
    if (!this.editObject) {

      var formValue = AddParagraph.value;
      const body = {
        author: localStorage.getItem('email'),
        paragraphTitle: formValue.paragraphTitle,
        paragraphHeading: formValue.paragraphHeading,
        paragraphUserType: formValue.paragraphUserType,
        section: formValue.section,
        testNumber: formValue.testDetails.testNumber,
        paragraphSectionCategory:formValue.paragraphSectionCategory
      } 
      this.apiService.insertParagraph(body).subscribe((data: any) => {
        if (data.status == 200) {
          this.snack.openFromComponent(SnackBarComponent, {
            duration: 3 * 1000,
            data: "Paragraph Added Successfully"
          });
        }
      })
    } else {
      var updateFormValue = AddParagraph.value;
      var section;
      var testNumber;
      var paragraphUserType;

      if (!updateFormValue.section) {
        section = this.editObject.section;
      } else {
        section = updateFormValue.section;
      }
      if (!updateFormValue.testNumber) {
        testNumber = this.editObject.testNumber;
      } else {
        testNumber = updateFormValue.testNumber;
      }
      if (!updateFormValue.paragraphUserType) {
        paragraphUserType = this.editObject.paragraphUserType;
      } else {
        paragraphUserType = updateFormValue.paragraphUserType;
      }

      const updateBody = {
        _id: this.editObject._id,
        author: localStorage.getItem('email'),
        paragraphTitle: updateFormValue.paragraphTitle,
        paragraphHeading: updateFormValue.paragraphHeading,
        paragraphUserType: paragraphUserType,
        section: section,
        testNumber: testNumber,
        paragraphSectionCategory:updateFormValue.paragraphSectionCategory
      }
      this.apiService.updateParagraph(updateBody).subscribe((data: any) => {
        if (data.status == 200) {
          this.snack.openFromComponent(SnackBarComponent, {
            duration: 3 * 1000,
            data: "Paragraph Updated Successfully"
          });
        }
      })
    }
  }

  deleteParagraph() {
    const params = {
      _id: this.editObject._id
    }
    this.apiService.deleteParagraph(params).subscribe((data: any) => {
      if (data.status == 200) {
        this.route.navigate(['dashboard'])
      }

    })
  }
}
