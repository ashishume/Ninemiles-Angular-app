import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/services/api-service/api.service';
import FileSaver from 'file-saver';

@Component({
  selector: 'app-show-writing',
  templateUrl: './show-writing.component.html',
  styleUrls: ['./show-writing.component.css']
})
export class ShowWritingComponent implements OnInit {

  constructor(private apiService: ApiService) { }
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

}
