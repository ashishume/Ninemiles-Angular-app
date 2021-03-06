import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ErrorServiceService } from '../shared/services/error-service/error-service.service';
import { NavbarService } from '../shared/services/navbar-service/navbar.service';
import { InfoPageComponent } from '../shared/components/info-page/info-page.component';
import { Title } from '@angular/platform-browser';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  typeOfUser;
  constructor(
    private apiService: ApiService,
    public matDialog: MatDialog,
    private route: Router,
    private titleService: Title,
    private snack: ErrorServiceService,
    private navbar: NavbarService
  ) {
    this.typeOfUser = localStorage.getItem('userType');
    this.titleService.setTitle('Dashboard');
  }
  paymentStatus;
  freeTestDetails;
  paidTestDetails;
  testAttemptedArray = [];
  userTypeDetails;
  studentTypes = [];
  userType;
  countOfGivenTests = 0;
  ngOnInit() {
    this.navbar.show();
    this.studentTypes = this.apiService.getStudentTypes();
    const query = {
      email: localStorage.getItem('email'),
    };
    this.apiService.getProfileDetails(query).subscribe((data: any) => {
      if (data.status == 200) {
        this.userTypeDetails = data.body.userType;
      }
    });

    this.apiService.showTestData(query).subscribe((data: any) => {
      let freeTestArray = [];
      let paidTestArray = [];
      var countOfGivenTests = 0;
      if (data.status == 200) {
        this.getPaymentStatus(query);
        data.body.testDetails.forEach(function (value) {
          value.testAttemptStatus = false;
          if (value.testPricingStatus == false) {
            freeTestArray.push(value);
          } else {
            paidTestArray.push(value);
          }
          if (
            value.listening == true &&
            value.speaking == true &&
            value.reading == true &&
            (value.writing == true || value.onlineWriting == true)
          ) {
            countOfGivenTests += 1;
            value.testAttemptStatus = true;
          }
        });
        this.countOfGivenTests = countOfGivenTests;
        localStorage.setItem('countOfTests', this.countOfGivenTests.toString());
        this.freeTestDetails = freeTestArray;
        this.paidTestDetails = paidTestArray;
      }
    });
  }

  getPaymentStatus(query) {
    this.apiService.getProfileDetails(query).subscribe((data: any) => {
      if (data.status == 200) {
        localStorage.setItem('paymentStatus', data.body.paymentStatus);
      }
      this.paymentStatus = localStorage.getItem('paymentStatus');
    });
  }

  navigateToSection(testNumber) {
    localStorage.setItem('testNumber', testNumber);
    this.route.navigate(['section']);
  }

  checkTestMarks(testNumber) {
    localStorage.setItem('testNumber', testNumber);
    this.route.navigate(['marks-sheet']);
  }

  submitUserType() {
    if (this.userType) {
      const body = {
        email: localStorage.getItem('email'),
        userType: this.userType,
      };
      this.apiService.updateUserType(body).subscribe((data: any) => {
        if (data.status == 200) {
          this.snack.showError('User Type updated successfully');
          localStorage.setItem('userType', this.userType);
          this.ngOnInit();
        }
      });
    }
  }

  initiatePayment() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '400px';

    const dialogRef = this.matDialog.open(InfoPageComponent, dialogConfig);
    // dialogRef.afterClosed().subscribe((result: any) => {

    // })
  }
}
