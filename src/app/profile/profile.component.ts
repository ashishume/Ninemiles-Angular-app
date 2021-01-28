import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { InfoPageComponent } from '../shared/components/info-page/info-page.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  countOfGivenTests;
  constructor(
    private apiService: ApiService,
    private matDialog: MatDialog
  ) { }
  userDetails: any;
  ngOnInit() {
    this.countOfGivenTests = localStorage.getItem('countOfTests')
    var query = {
      email: localStorage.getItem('email')
    }
    this.apiService.getProfileDetails(query).subscribe((data: any) => {
      this.userDetails = data.body;

    })
  }

  initiatePayment() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '500px';
    dialogConfig.height = '400px';
    this.matDialog.open(InfoPageComponent, dialogConfig);
  }

}
