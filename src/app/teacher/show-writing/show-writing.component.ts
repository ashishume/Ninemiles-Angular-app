import { ShowWritingQuestionComponent } from './../../shared/components/show-writing-question/show-writing-question.component';
import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api-service/api.service';
import FileSaver from 'file-saver';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { InfoPageComponent } from 'src/app/shared/components/info-page/info-page.component';

@Component({
  selector: 'app-show-writing',
  templateUrl: './show-writing.component.html',
  styleUrls: ['./show-writing.component.css']
})
export class ShowWritingComponent implements OnInit {

  constructor(private apiService: ApiService, public matDialog: MatDialog) { }
  studentDetails = [];
  ngOnInit() {

    this.apiService.showWritingAnswers().subscribe((data: any) => {
      if (data.status == 200) {
        this.studentDetails = data.body;
      }
    })
  }

  downloadAnswer(item, name) {
    var blob = new Blob([item.answer], { type: "text/plain;charset=utf-8" });
    FileSaver.saveAs(blob, name + "_section" + item.section + ".txt");
  }


  showQuestion1(question1) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '600px';
    dialogConfig.data = question1;
    this.matDialog.open(ShowWritingQuestionComponent, dialogConfig);

  }

  showQuestion2(question2) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.width = '600px';
    dialogConfig.height = '600px';
    dialogConfig.data = question2;
    this.matDialog.open(ShowWritingQuestionComponent, dialogConfig);

  }



}
