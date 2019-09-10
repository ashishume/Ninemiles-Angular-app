import { ApiService } from './../../../shared/services/api-service/api.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WritingService {

  constructor(private apiService: ApiService) { }


  insertImageData(url) {
    const body = {
      onlineAnswer: url,
      studentEmail: localStorage.getItem('email'),
      studentName: localStorage.getItem('name'),
      testNumber: parseInt(localStorage.getItem('testNumber')),
      userType: localStorage.getItem('userType')
    }

    this.apiService.insertOnlineTest(body).subscribe((data: any) => {
      console.log(data);
    })
  }
}
