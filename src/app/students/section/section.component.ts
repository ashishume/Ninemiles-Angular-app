import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  questions = [];
  paragraphDetails;
  public firstSectionTest: FormGroup;
  constructor(private apiService: ApiService,
    private fb: FormBuilder,
  ) {
    this.firstSectionTest = this.fb.group(
      {
        section: new FormControl('', [Validators.required])
      },
    );
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.firstSectionTest.controls[controlName].hasError(errorName);
  }


  ngOnInit() {
    this.apiService.getListOfQuestions().subscribe((response: any) => {
      if (response.status == 200) {
        this.questions = response.body;
      }
    })

    this.apiService.getListOfParagraph().subscribe((response:any)=>{
  if(response.status==200)
  {
    console.log(response.body);
    
    this.paragraphDetails=response.body;
  }      
    })
  }

  tempArray = []
  checkOptionStatus(optionValue, event) {
    if (event.checked == true) {
      this.tempArray.push(optionValue)
    } else {

      for (var i = 0; i < this.tempArray.length; i++) {
        if (this.tempArray[i] === optionValue) {
          this.tempArray.splice(i, 1);
        }
      }
    }
  }

  onSubmitOfSection() {
    console.log(this.tempArray);
  }
}
