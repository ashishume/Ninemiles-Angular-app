import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-speaking-dialog',
  templateUrl: './speaking-dialog.component.html',
  styleUrls: ['./speaking-dialog.component.css']
})
export class SpeakingDialogComponent implements OnInit {

  constructor(private mat: MatDialogRef<SpeakingDialogComponent>) { }

  ngOnInit() {
  }

  closeDialog() {
    this.mat.close()
  }
}
