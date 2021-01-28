import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/shared/services/navbar-service/navbar.service';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { EmailService } from 'src/app/shared/services/email/email.service';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { SpeakingDialogComponent } from 'src/app/shared/components/speaking-dialog/speaking-dialog.component';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.css']
})
export class SpeakingComponent implements OnInit {
  public SpeakingFormGroup: FormGroup;
  disablePastDates
  phone;
  countryName;
  date;
  time;
  private currentDate = new Date();
  pattern = new RegExp("^[0-9]{10}$");
  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    private email: EmailService,
    private matDialog: MatDialog,
    private nav: NavbarService,
    private titleService: Title
  ) {
    this.titleService.setTitle('Speaking Section')
    this.nav.testActive()

    this.currentDate.setDate(this.currentDate.getDate() + 1);
    this.disablePastDates = this.currentDate;
    this.SpeakingFormGroup = this.fb.group(
      {
        countryName: new FormControl('', [Validators.required]),
        date: new FormControl('', [Validators.required]),
        phone: new FormControl('', [Validators.required]),
        time: new FormControl('', [Validators.required]),
      },
    );
  }
  countOfTests;
  ngOnInit() {

  }


  onSubmitSpeakingForm(form) {
    const formData = form.value;
    var date = formData.date.toDateString()

    const body = {
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      testNumber: parseInt(localStorage.getItem('testNumber')),
      country: formData.countryName,
      time: formData.time,
      date: date,
      phone: formData.phone
    }
    this.email.requestSpeakingTest(body)

  }





}
