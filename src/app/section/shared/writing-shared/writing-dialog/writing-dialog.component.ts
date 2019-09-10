import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';

@Component({
  selector: 'app-writing-dialog',
  templateUrl: './writing-dialog.component.html',
  styleUrls: ['./writing-dialog.component.css']
})
export class WritingDialogComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<WritingDialogComponent>) { }


  ngOnInit() {
  }

  uploadEvent() {
    this.dialogRef.close("upload")
  }
  onlineEvent() {
    this.dialogRef.close("online")
  }
}
