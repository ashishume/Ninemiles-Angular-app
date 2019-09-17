import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/services/api-service/api.service';
import { saveAs } from 'file-saver';
var FileSaver = require('file-saver');

@Component({
  selector: 'app-teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.css']
})
export class TeacherComponent implements OnInit {

  constructor(private apiService: ApiService) { }

  StudentDetails = [];
  ngOnInit() { }
}

