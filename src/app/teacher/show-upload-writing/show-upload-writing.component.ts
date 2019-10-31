import { ApiService } from './../../shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material';

import { ShowWritingQuestionComponent } from 'src/app/shared/components/show-writing-question/show-writing-question.component';

@Component({
  selector: 'app-show-upload-writing',
  templateUrl: './show-upload-writing.component.html',
  styleUrls: ['./show-upload-writing.component.css']
})
export class ShowUploadWritingComponent implements OnInit {

  constructor(private apiService: ApiService, private matDialog: MatDialog) { }


  StudentDetails = [];

  ngOnInit() {

    this.apiService.displayOnlineTestDetails().subscribe((data: any) => {
      if (data.status == 200) {
        this.StudentDetails = data.body;
        console.log(data.body);

      }
    })

  }


  showQuestion(question1) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '600px';
    dialogConfig.data = question1;
    this.matDialog.open(ShowWritingQuestionComponent, dialogConfig);

  }

}
