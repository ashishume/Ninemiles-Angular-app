import { ApiService } from './../shared/services/api-service/api.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import * as Chart from 'chart.js';


@Component({
  selector: 'app-marks-sheet',
  templateUrl: './marks-sheet.component.html',
  styleUrls: ['./marks-sheet.component.css']
})
export class MarksSheetComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  @ViewChild('content') content: ElementRef
  marksDetails = []
  UploadMarksDetails = [];
  countOfTests = [];
  testNumber;
  imageUrl: string;
  name: string;
  email: string;
  studentType: string;
  ngOnInit() {
    this.imageUrl = localStorage.getItem('photoURL')
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')
    this.studentType = localStorage.getItem('userType')

    if (localStorage.getItem('userType') == "Academic Students")
      this.studentType = "Academic Student";
    if (localStorage.getItem('userType') == "General Students")
      this.studentType = "General Student";

    this.countOfTests = this.apiService.numberOfTests()
  }


  downloadPDF() {
    var data = document.getElementById('contentToConvert');
    html2canvas(data).then(canvas => {
      var imgWidth = 208;
      var pageHeight = 295;
      var imgHeight = canvas.height * imgWidth / canvas.width;
      var heightLeft = imgHeight;

      const contentDataURL = canvas.toDataURL('image/png')
      let pdf = new jsPDF('l', 'mm', 'a5'); // size page of PDF  
      var position = 10;
      pdf.addImage(contentDataURL, 'PNG', 1, position, imgWidth, imgHeight)
      var name = localStorage.getItem('name') + "_test_number_1";
      pdf.save(name); // Generated PDF   
    });

  }

  showResult(test) {
    this.testNumber = test;
    this.showTestResult()
    // this.downloadPDF()
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
        console.log(this.marksDetails);

      }
    })
  }


}
