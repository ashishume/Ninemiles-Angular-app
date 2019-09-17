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
  ngOnInit() {
    const params = {
      email: localStorage.getItem('email')
    }
    let tempArray = []
    this.apiService.displayMarksSheet(params).subscribe((data: any) => {
      if (data.status == 200) {
        data.body.forEach(function (value) {
          if (value.testNumber == parseInt(localStorage.getItem('testNumber'))) {
            tempArray.push(value)
          }
        })
        this.marksDetails = tempArray;
      }
    })



  }




}
