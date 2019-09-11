import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Injectable } from '@angular/core';
import { ErrorServiceService } from '../error-service/error-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor(
    private apiService: ApiService,
    private showSnack: ErrorServiceService) { }

  sendEMailToStudent(name, email, subject) {


    var html = `<div class="container" style="font-family: 'Lexend Deca', sans-serif;">
  <div class="row">
      <div class="content" style=" max-width: 400px;
      margin: 0 auto;
      padding: 5px 10px;
      border-radius: 15px;
      border: solid 5px #20688F;">
          <div class="image-container" style="text-align: center">

              <img class="image-logo" style="width: 200px;"
                  src="https://firebasestorage.googleapis.com/v0/b/upwork-5d46d.appspot.com/o/Ninemiles%20Logo%2FNINEMILES.png?alt=media&token=075867a5-0b1e-4242-80a5-ba50e7f68e58" alt="Ninemiles Logo">
              <hr>
          </div>
          <h4 class="heading" style=" text-align: center;
          color: green;">Congratulations, your test has been checked</h4>
          <p class="para" style=" background-color: #f4f4f4;
          padding: 10px 15px;
          border-radius: 15px;">
              Hi ${name}, <br><br>
              Your test has been checked by the Ninemiles professors,
              Please check your score by visiting the Ninemiles Web App. <br> <br> Thanks <br> <br> Regards<br />Ninemiles Team
          </p>
          <hr>
          <p class="footer" style=" text-align: center;
          font-size: 10px;">
              Bengaluru,Karnataka
          </p>
      </div>

  </div>
</div>
`

    const body = {
      email: email,
      subject: subject,
      htmlCode: html
    }
    this.apiService.sendEmail(body).subscribe((data: any) => {
      if (data.status == 200) {
        this.showSnack.showError("Mail has been successfully sent");
      } else {
        this.showSnack.showError("Something went wrong");
      }
    })
  }


}
