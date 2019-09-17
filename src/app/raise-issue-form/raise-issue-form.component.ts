import { MatDialogRef } from '@angular/material';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-raise-issue-form',
  templateUrl: './raise-issue-form.component.html',
  styleUrls: ['./raise-issue-form.component.css']
})
export class RaiseIssueFormComponent implements OnInit {

  constructor(private mat: MatDialogRef<RaiseIssueFormComponent>) { }
  message;
  ngOnInit() {
  }

  raisedIssue() {
    console.log(this.message);

  }
  onSubmitIssue(IssueForm) {
    if (IssueForm.value) {
      this.mat.close(IssueForm.value)
    }

  }


}
