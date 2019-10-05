import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { ErrorServiceService } from 'src/app/shared/services/error-service/error-service.service';

@Component({
  selector: 'app-update-test-status',
  templateUrl: './update-test-status.component.html',
  styleUrls: ['./update-test-status.component.css']
})
export class UpdateTestStatusComponent implements OnInit {



  public TestFormGroup: FormGroup;
  StudentDetails = [];
  listUserTypes = [];
  sectionCategory = [];
  constructor(
    private apiService: ApiService,
    private fb: FormBuilder,
    private snack: ErrorServiceService
  ) {

    this.TestFormGroup = this.fb.group(
      {
        studentDetails: new FormControl('', [Validators.required]),
        testNumber: new FormControl('', [Validators.required]),
        testStatusUpdate: new FormControl('', [Validators.required]),
      },
    );

  }




  dropdownOptions = []
  countOfTests = [];
  config = {
    displayKey: "email",
    search: true,
    height: 'auto',
    placeholder: 'Select',
    customComparator: () => { },
    limitTo: 5,
    moreText: 'more',
    noResultsFound: 'No results found!',
    searchPlaceholder: 'Search',
    searchOnKey: 'name'
  }
  ngOnInit() {
    this.countOfTests = this.apiService.numberOfTests();
    this.sectionCategory = this.apiService.getSectionCategory()
    this.sectionCategory.push("onlineWriting");
    console.log(this.sectionCategory);

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

  onSubmitOfTest(TestForm) {
    console.log(TestForm.value);
    var section;
    if (TestForm.value.testStatusUpdate != "onlineWriting") {
      section = TestForm.value.testStatusUpdate.toLowerCase()
    } else {
      section = TestForm.value.testStatusUpdate;
    }
    const body = {
      "email": TestForm.value.studentDetails.email,
      "testNumber": TestForm.value.testNumber,
      "testStatusUpdate": section
    }

    console.log(body);

    this.apiService.changeTestStatus(body).subscribe((data: any) => {
      if (data.status == 200) {
        this.snack.showError("Test Unlocked successfully");
      }

    })


  }












}
