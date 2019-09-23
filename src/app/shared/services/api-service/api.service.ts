import { HttpService } from '../http-service/http.service';
import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';
import { Router } from '@angular/router';
import { ErrorServiceService } from '../error-service/error-service.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  testNumber = 0;
  paymentStatus;
  listOfTestDetails;
  constructor(
    private httpService: HttpService,
    private snack: ErrorServiceService) { }

  login(body) {
    return this.httpService.callApi('POST', body, 'user/signup', '');
  }

  updateUserType(body) {
    return this.httpService.callApi('PUT', body, 'user/updateUserType', '')
  }
  // ******************************************

  getListOfQuestions() {
    return this.httpService.callApi('GET', '', 'questions/listQuestions', '');
  }
  insertQuestion(body) {
    return this.httpService.callApi('POST', body, 'questions/addQuestion', '');
  }
  updateQuestion(body) {
    return this.httpService.callApi('PUT', body, 'questions/updateQuestion', '');
  }

  // ******************************************

  // ******************************************
  insertParagraph(body) {
    return this.httpService.callApi('POST', body, 'contents/addParagraph', '');
  }
  deleteQuestion(params) {
    return this.httpService.callApi('DELETEBYPARAMS', '', 'questions/deleteQuestion', params);
  }
  getListOfParagraph() {
    return this.httpService.callApi('GET', '', 'contents/listParagraph', '');
  }
  updateParagraph(body) {
    return this.httpService.callApi('PUT', body, 'contents/updateParagraph', '');
  }
  deleteParagraph(param) {
    return this.httpService.callApi('DELETEBYPARAMS', '', 'contents/deleteParagraph', param);
  }

  // ******************************************

  getProfileDetails(query) {
    return this.httpService.callApi('GETBYPARAMS', '', 'user', query);
  }

  addTestData(body) {
    return this.httpService.callApi('POST', body, 'tests/addTests', '');
  }
  updateTestData(body) {
    return this.httpService.callApi('PUT', body, 'tests/updateTests', '');
  }
  changeTestStatus(body) {
    return this.httpService.callApi('PUT', body, 'tests/changeTestStatus', '');
  }

  showTestData(query) {
    return this.httpService.callApi('GETBYPARAMS', '', 'tests/listTests', query);
  }
  listAllUsers() {
    return this.httpService.callApi('GET', '', 'user/listUsers', '');
  }
  setPaymentStatus(body) {
    return this.httpService.callApi('PUT', body, 'user/paymentStatus', '');
  }
  //**********************************************************************




  // ***********************************************************************
  // WRITING SECTION
  submitWritingAnswer(body) {
    return this.httpService.callApi('POST', body, 'contents/writingAnswer', '');
  }

  showWritingAnswers() {
    return this.httpService.callApi('GET', '', 'contents/showAnswer', '');
  }

  // **************************************************************************

  //ONLINE UPLOAD TEST SECTION
  insertOnlineTest(body) {
    return this.httpService.callApi('POST', body, 'contents/onlineWriting', '');
  }
  displayOnlineTestDetails() {
    return this.httpService.callApi('GET', '', 'contents/showOnline', '');
  }
  updateOnlineTest(body) {
    return this.httpService.callApi('PUT', body, 'contents/updateAnswer', '');
  }

  //SEND MAIL
  sendEmail(body) {
    return this.httpService.callApi('POST', body, 'user/sendEmail', '')
  }
  // ***********************************************************************

  //SUBMIT MARKSSHEET
  insertMarkSheet(body) {
    return this.httpService.callApi('POST', body, 'marks/addMarks', '')
  }

  // DISPLAY MARKSSHEET
  displayMarksSheet(params) {
    return this.httpService.callApi('GETBYPARAMS', '', 'marks/showMarks', params)
  }


  // ***********************************************************************
  //ISSUES API
  insertIssue(body) {
    return this.httpService.callApi('POST', body, 'issue/addIssue', '')
  }
  displayIssue() {
    return this.httpService.callApi('GET', '', 'issue/showIssues', '')
  }
  updateIssue(body) {
    return this.httpService.callApi('PUT', body, 'issue/updateIssues', '')
  }
  // ***********************************************************************
  //ANALYSIS DATA

  getAnalysisData(query) {
    return this.httpService.callApi('GETBYPARAMS', '', 'marks/average', query)
  }


  // ***********************************************************************





  ////TO CHECK WHETHER THE TEST IS ALREADY GIVEN OR NOT
  checkTestStatus() {
    const query = {
      email: localStorage.getItem('email')
    }
    const object = new Rx.Observable(observer => {
      this.showTestData(query).subscribe((data: any) => {
        data.body.testDetails.forEach(element => {
          if (element.testNumber == parseInt(localStorage.getItem('testNumber')))
            observer.next(element);
        });
      });
    });
    return object;

  }

  //TO UPDATE TEST STATUS
  updateTestStatus(section) {
    let updateBody = {
      email: localStorage.getItem('email'),
      testNumber: parseInt(localStorage.getItem('testNumber')),
      testStatusUpdate: ""
    }
    updateBody.testStatusUpdate = section;
    this.updateTestData(updateBody).subscribe((data: any) => {
      if (data.status == 200) {
        this.snack.showError("Your test has been successfully submitted")
        // this.route.navigate(['res'])
      }
    })
  }



  //common data for components
  getStudentTypes() {
    let paragraphUserType = [
      "Academic Students",
      "General Students",
      // "Teacher",
      // "Admin"
    ]
    return paragraphUserType;
  }
  getUserTypes() {
    let userType = [
      "Academic Students",
      "General Students",
      "Teacher",
      "Admin"
    ]
    return userType;
  }
  getSectionCategory() {
    let sectionCategory = [
      "Reading",
      "Writing",
      "Listening",
      "Speaking"
    ]
    return sectionCategory;
  }
  getQuestionTypes() {
    let listOfQuestionTypes = [
      "Type in the blanks", "Select in the blanks"
    ]
    return listOfQuestionTypes;
  }
  getCountOfSection() {
    let section = [
      1, 2, 3, 4
    ]
    return section;
  }

  dataItemObject;
  passDataValues(data) {
    this.dataItemObject = data;
  }
  returnDataValues() {
    return this.dataItemObject;
  }

  numberOfTests() {
    let tempArray = []
    for (let i = 1; i <= 30; i++) {
      tempArray.push(i);
    }
    return tempArray;
  }

}
