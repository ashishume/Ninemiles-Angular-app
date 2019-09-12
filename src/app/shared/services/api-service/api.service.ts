import { HttpService } from '../http-service/http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  testNumber = 0;
  paymentStatus;
  listOfTestDetails;
  constructor(private httpService: HttpService) { }

  login(body) {
    return this.httpService.callApi('POST', body, 'user/signup', '');
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
  submitWritingAnswer(body) {
    return this.httpService.callApi('POST', body, 'contents/writingAnswer', '');
  }


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












  //common data for components
  getStudentTypes() {
    let paragraphUserType = [
      "Academic Students",
      "General Students",
      "Teacher",
      "Admin"
    ]
    return paragraphUserType;
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

}
