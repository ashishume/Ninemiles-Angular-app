import { ApiService } from './../../../../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { ErrorServiceService } from 'src/app/shared/services/error-service/error-service.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-writing-dialog',
  templateUrl: './writing-dialog.component.html',
  styleUrls: ['./writing-dialog.component.css']
})
export class WritingDialogComponent implements OnInit {

  constructor(
    private apiService: ApiService,
    public dialogRef: MatDialogRef<WritingDialogComponent>,
    private snack: ErrorServiceService
  ) { }
  testDetails = [];

  ngOnInit() {
    const query = {
      email: localStorage.getItem('email')
    }
    const testNumber = parseInt(localStorage.getItem('testNumber'))
    this.apiService.showTestData(query).subscribe((data: any) => {
      if (data.status == 200) {
        data.body.testDetails.forEach(value => {
          if (value.testNumber == testNumber) {
            this.testDetails.push(value);
          }
        });
      }
    })
  }

  uploadEvent() {
    this.dialogRef.close("upload")
  }
  onlineEvent() {
    this.dialogRef.close("online")
  }
  showAttemptMessage() {
    this.snack.showError("You have already attempted the test")
  }
}
