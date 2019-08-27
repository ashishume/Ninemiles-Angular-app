import { HttpService } from './http.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpService: HttpService) { }


  getListOfQuestions() {
    return this.httpService.callApi('GET', '', 'questions/listQuestions', '')
  }
  insertQuestion(body) {
    return this.httpService.callApi('POST', body, 'questions/addQuestion', '')
  }
}
