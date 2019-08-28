import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, FormArray } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-add-paragraph',
  templateUrl: './add-paragraph.component.html',
  styleUrls: ['./add-paragraph.component.css']
})
export class AddParagraphComponent implements OnInit {



  section = [
    1, 2, 3, 4
  ]

  listOfTests;
  paragraphUserType = [
    "Academic Students",
    "General Students"
  ]
  public AddParagraph: FormGroup;
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
  ) {
    this.listOfTests = Array(30).fill(2).map((x,i)=>i+3);

    this.AddParagraph = this.fb.group(
      {
        paragraphTitle: new FormControl('', [Validators.required]),
        section: new FormControl('', [Validators.required]),
        paragraphUserType: new FormControl('', [Validators.required]),
        testNumber: new FormControl('', [Validators.required]),
        paragraphHeading: new FormControl('', [Validators.required]),
      },
    );
  }


  public hasError = (controlName: string, errorName: string) => {
    return this.AddParagraph.controls[controlName].hasError(errorName);
  }
  ngOnInit() {

  }
  onSubmitParagraph(AddParagraph) {
    AddParagraph.value.author = "ashishume@gmail.com";
    this.apiService.insertParagraph(AddParagraph.value).subscribe((data: any) => {
      console.log(data);
    })
  }
}
