import { ApiService } from './../shared/services/api-service/api.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


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
  ngOnInit() {
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')


    this.countOfTests = this.apiService.numberOfTests()
  }


  downloadPDF() {
    this.imageUrl = localStorage.getItem('photoURL')


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
    this.downloadPDF()
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


  showPDF() {






    // let doc = new jsPDF()
    // let specialElementHeaders = {
    //   '#editor': function (element, renderer) {
    //     return true
    //   }
    // };
    // let content = this.content.nativeElement;
    // doc.fromHTML(content.innerHTML, 15, 15, {
    //   'width': 190,
    //   'elementHandlers': specialElementHeaders
    // })
    // doc.save('test.pdf')
  }

}
