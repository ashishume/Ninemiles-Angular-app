import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Injectable } from '@angular/core';
import { IfStmt } from '@angular/compiler';
import { isEmpty } from 'rxjs/operators';
import { empty } from 'rxjs';
import { Router } from '@angular/router';
import { ErrorServiceService } from '../error-service/error-service.service';

@Injectable({
  providedIn: 'root'
})
export class CalculateMarksService {

  constructor(private apiService: ApiService, private route: Router, private snack: ErrorServiceService) { }
  countOfCorrectAnswers = 0;
  finalScore = 0;
  bandCalculation(marks, section) {
    console.log("marks",marks);
    
    const userType = localStorage.getItem('userType');
    if (section == "reading") {
      if (userType == "Academic Students") {

        if (marks >= 1 && marks <= 5)
          this.finalScore = 2.5;
        else if (marks >= 6 && marks <= 7)
          this.finalScore = 3
        else if (marks >= 8 && marks <= 9)
          this.finalScore = 3.5
        else if (marks >= 10 && marks <= 12)
          this.finalScore = 4
        else if (marks >= 13 && marks <= 14)
          this.finalScore = 4.5
        else if (marks >= 15 && marks <= 18)
          this.finalScore = 5
        else if (marks >= 19 && marks <= 22)
          this.finalScore = 5.5
        else if (marks >= 23 && marks <= 26)
          this.finalScore = 6
        else if (marks >= 27 && marks <= 29)
          this.finalScore = 6.5
        else if (marks >= 30 && marks <= 32)
          this.finalScore = 7
        else if (marks >= 33 && marks <= 34)
          this.finalScore = 7.5
        else if (marks >= 35 && marks <= 36)
          this.finalScore = 8
        else if (marks >= 37 && marks <= 38)
          this.finalScore = 8.5
        else if (marks >= 39 && marks <= 40)
          this.finalScore = 9


      } else if (userType == "General Students") {

        if (marks >= 1 && marks <= 8)
          this.finalScore = 2.5;
        else if (marks >= 9 && marks <= 11)
          this.finalScore = 3
        else if (marks >= 12 && marks <= 14)
          this.finalScore = 3.5
        else if (marks >= 15 && marks <= 18)
          this.finalScore = 4
        else if (marks >= 19 && marks <= 22)
          this.finalScore = 4.5
        else if (marks >= 23 && marks <= 26)
          this.finalScore = 5
        else if (marks >= 27 && marks <= 29)
          this.finalScore = 5.5
        else if (marks >= 30 && marks <= 31)
          this.finalScore = 6
        else if (marks >= 32 && marks <= 33)
          this.finalScore = 6.5
        else if (marks >= 34 && marks <= 35)
          this.finalScore = 7
        else if (marks == 36)
          this.finalScore = 7.5
        else if (marks >= 37 && marks <= 38)
          this.finalScore = 8
        else if (marks == 39)
          this.finalScore = 8.5
        else if (marks == 40)
          this.finalScore = 9

      }
    } else if (section == "listening") {
      if (marks >= 1 && marks <= 5)
        this.finalScore = 2.5;
      else if (marks >= 6 && marks <= 7)
        this.finalScore = 3
      else if (marks >= 8 && marks <= 10)
        this.finalScore = 3.5
      else if (marks >= 10 && marks <= 12)
        this.finalScore = 4
      else if (marks >= 13 && marks <= 15)
        this.finalScore = 4.5
      else if (marks >= 16 && marks <= 17)
        this.finalScore = 5
      else if (marks >= 18 && marks <= 22)
        this.finalScore = 5.5
      else if (marks >= 23 && marks <= 25)
        this.finalScore = 6
      else if (marks >= 26 && marks <= 29)
        this.finalScore = 6.5
      else if (marks >= 30 && marks <= 31)
        this.finalScore = 7
      else if (marks >= 32 && marks <= 34)
        this.finalScore = 7.5
      else if (marks >= 35 && marks <= 36)
        this.finalScore = 8
      else if (marks >= 37 && marks <= 38)
        this.finalScore = 8.5
      else if (marks >= 39 && marks <= 40)
        this.finalScore = 9

    }

  }



  //READING SECTION
  calculateReadingSectionMarks(readingSectionMarks) {
    this.countOfCorrectAnswers = readingSectionMarks;
    this.bandCalculation(readingSectionMarks, "reading")
    const body = {
      email: localStorage.getItem('email'),
      testNumber: parseInt(localStorage.getItem('testNumber')),
      section: "reading",
      marksBand: this.finalScore,
      countOfCorrectAnswers: readingSectionMarks,
      userType: localStorage.getItem('userType')
    }

    this.apiService.insertMarkSheet(body).subscribe((data: any) => {
      if (data.status == 200) {
        this.route.navigate(['results'])
      }
    })

  }

  calculateListeningSectionMarks(listeningMarks) {

    this.bandCalculation(listeningMarks, "listening")
    this.countOfCorrectAnswers = listeningMarks;
    const body = {
      email: localStorage.getItem('email'),
      testNumber: parseInt(localStorage.getItem('testNumber')),
      section: "listening",
      marksBand: this.finalScore,
      countOfCorrectAnswers: listeningMarks,
      userType: localStorage.getItem('userType')
    }
    this.apiService.insertMarkSheet(body).subscribe((data: any) => {
      if (data.status == 200) {
        this.route.navigate(['results'])
      }
    })
  }

  calculateWritingSectionMarks(writingBody) {
    this.apiService.insertMarkSheet(writingBody).subscribe((data: any) => {
      if (data.status == 200) {
        this.snack.showError("Result submitted successfully");
      }
    })
  }
  calculateSpeakingSectionMarks(speakingBody) {
    this.apiService.insertMarkSheet(speakingBody).subscribe((data: any) => {
      if (data.status == 200) {
        this.snack.showError("Result submitted successfully");
      }
    })
  }
  calculateUploadDocumentSectionMarks(uploadBody) {
    this.apiService.insertMarkSheet(uploadBody).subscribe((data: any) => {
      if (data.status == 200) {
        this.snack.showError("Result submitted successfully");
      }
    })
  }

}
