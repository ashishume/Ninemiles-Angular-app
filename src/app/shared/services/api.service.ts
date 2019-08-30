import { HttpService } from './http.service';
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

  getListOfQuestions() {
    return this.httpService.callApi('GET', '', 'questions/listQuestions', '');
  }
  insertQuestion(body) {
    return this.httpService.callApi('POST', body, 'questions/addQuestion', '');
  }
  insertParagraph(body) {
    return this.httpService.callApi('POST', body, 'contents/addParagraph', '');
  }
  getListOfParagraph() {
    return this.httpService.callApi('GET', '', 'contents/listParagraph', '');
  }
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




  //COMMON DATA TO COMPONENTS
  // getCountOfTests() {
  //   const email = {
  //     email: localStorage.getItem('email')
  //   }
  //   this.getProfileDetails(email).subscribe((data: any) => {
  //     if (data.status == 200) {
  //       this.paymentStatus = data.body.paymentStatus;
  //       let tempArray = []
  //       if (this.paymentStatus == false) {
  //         for (let i = 1; i <= 32; i++) {
  //           if (i == 1 || i == 2) {
  //             tempArray.push({ testNumber: i, testAttemptStatus: false, testPricingStatus: false })
  //           } else {
  //             tempArray.push({ testNumber: i, testAttemptStatus: false, testPricingStatus: true })
  //           }
  //         }
  //         this.listOfTestDetails = tempArray;
  //       } else {
  //         for (let i = 1; i <= 32; i++) {
  //           tempArray.push({ testNumber: i, testAttemptStatus: false, testPricingStatus: true })
  //         }
  //         this.listOfTestDetails = tempArray;
  //       }
  //     }
  //   })
  //   return this.listOfTestDetails;
  // }

  getStudentTypes() {
    let paragraphUserType = [
      "Academic Students",
      "General Students"
    ]
    return paragraphUserType;
  }
  getQuestionTypes() {
    let listOfQuestionTypes = [
      "MCQ",
      "Matching Questions",
      "Long Questions",
      "Fill in the blanks"
    ]
    return listOfQuestionTypes;
  }
  getCountOfSection() {
    let section = [
      1, 2, 3, 4
    ]
    return section;
  }

}
