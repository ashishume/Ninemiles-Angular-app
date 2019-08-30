import { ApiService } from './../shared/services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor(private apisService:ApiService,private router: ActivatedRoute) { }
  testNumber;
  ngOnInit() {
  var number = this.router.snapshot.paramMap.get('id');

  localStorage.setItem('testNumber',number)
  }

}
