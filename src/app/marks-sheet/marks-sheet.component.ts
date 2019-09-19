import { ApiService } from './../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marks-sheet',
  templateUrl: './marks-sheet.component.html',
  styleUrls: ['./marks-sheet.component.css']
})
export class MarksSheetComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  marksDetails = []
  UploadMarksDetails = [];
  countOfTests = [];
  testNumber;
  ngOnInit() {
    this.countOfTests = this.apiService.numberOfTests()
  }


  showResult(test) {
    this.testNumber = test;
    this.showTestResult()
  }

  showDocumentScores(test) {
    this.testNumber = test;
    this.showDocumentResult()
  }
  showDocumentResult() {

    var testNumber = this.testNumber;
    let tempUploadArray = []
    this.apiService.displayOnlineTestDetails().subscribe((data: any) => {
      if (data.status == 200) {
        data.body.forEach(element => {
          if (element.studentEmail == localStorage.getItem('email') && element.testNumber == testNumber) {
            tempUploadArray.push(element)
          }
        });
        this.UploadMarksDetails = tempUploadArray;
      }
    })
  }

  showTestResult() {
    var testNumber = this.testNumber;

    const params = {
      email: localStorage.getItem('email')
    }
    let tempArray = []
    this.apiService.displayMarksSheet(params).subscribe((data: any) => {
      if (data.status == 200) {
        data.body.forEach(function (value) {
          if (value.testNumber == testNumber) {
            tempArray.push(value)
          }
        })
        this.marksDetails = tempArray;
      }
    })
  }




}
