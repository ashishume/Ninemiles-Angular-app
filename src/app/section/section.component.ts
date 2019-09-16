import { WritingDialogComponent } from './shared/writing-shared/writing-dialog/writing-dialog.component';
import { ApiService } from '../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material';
import { ErrorServiceService } from '../shared/services/error-service/error-service.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  testDetails = [];
  constructor(
    public matDialog: MatDialog,
    private route: Router,
    private apiService: ApiService,
    private snack: ErrorServiceService
  ) { }
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

  handlingWriting() {
    this.apiService.passDataValues("writing")
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '500px';
    dialogConfig.height = '350px';

    const dialogRef = this.matDialog.open(WritingDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: any) => {

      if (result == "upload") {
        this.route.navigate(['section/upload-writing'])
      } else if (result == "online") {
        this.apiService.passDataValues("writing")
        this.route.navigate(['section/test-description'])
      }
    })
  }
  handlingReading() {
    this.apiService.passDataValues("reading")
    this.route.navigate(['section/test-description'])
  }
  handlingSpeaking() {
    this.apiService.passDataValues("speaking")
    this.route.navigate(['section/test-description'])
  }
  handlingListening() {
    this.apiService.passDataValues("listening")
    this.route.navigate(['section/test-description'])
  }


  showAttemptMessage() {
    this.snack.showError("You have already attempted the test")
  }


}
