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
    this.apiService.displayMarksSheet(params).subscribe((data: any) => {
      if (data.status == 200) {
        this.marksDetails = data.body
        console.log(this.marksDetails);

      }
    })



  }




}
