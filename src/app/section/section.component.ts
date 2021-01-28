import { WritingDialogComponent } from './shared/writing-shared/writing-dialog/writing-dialog.component';
import { ApiService } from '../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ErrorServiceService } from '../shared/services/error-service/error-service.service';
import { RaiseIssueFormComponent } from '../raise-issue-form/raise-issue-form.component';
import { EmailService } from '../shared/services/email/email.service';
import { Title } from '@angular/platform-browser';

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
    private snack: ErrorServiceService,
    private email: EmailService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Section')
  }
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
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.width = '500px';
    dialogConfig.height = '350px';

    const dialogRef = this.matDialog.open(WritingDialogComponent, dialogConfig);
    dialogRef.afterClosed().subscribe((result: any) => {

      if (result == "upload") {
        this.apiService.passDataValues("upload")
        this.route.navigate(['section/test-description'])
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

  showIssueForm() {
    const dialogConfig = new MatDialogConfig();
    const dialogRef = this.matDialog.open(RaiseIssueFormComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(result => {

      const body = {
        email: localStorage.getItem('email'),
        name: localStorage.getItem('name'),
        message: result.message
      }


      this.apiService.insertIssue(body).subscribe(data => {
        if (data.status == 200) {
          this.snack.showError("Your issues has been received")
          this.email.sendIssueMail(localStorage.getItem('name'), localStorage.getItem('email'), result.message)
        }
      })

    })

  }

}
