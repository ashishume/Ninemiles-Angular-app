import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-show-writing-question',
  templateUrl: './show-writing-question.component.html',
  styleUrls: ['./show-writing-question.component.css']
})
export class ShowWritingQuestionComponent implements OnInit {
  question: string;
  constructor(@Inject(MAT_DIALOG_DATA) public data) {
    this.question = data;

  }

  ngOnInit() {
  }

}
