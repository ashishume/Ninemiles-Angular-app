import { CalculateMarksService } from './../shared/services/calculate-marks/calculate-marks.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarService } from '../shared/services/navbar-service/navbar.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(
    private calculateService: CalculateMarksService,
    private route: Router,
    // private navbarService: NavbarService
  ) {
    // this.navbarService.hide()
  }
  score=0;
  countOfCorrectAnswers=0;
  ngOnInit() {


    this.score = this.calculateService.finalScore;
    this.countOfCorrectAnswers = this.calculateService.countOfCorrectAnswers;
    // if (this.calculateService.finalScore) {
    // } else {
    //   this.route.navigate(['dashboard'])
    // }
  }

}
