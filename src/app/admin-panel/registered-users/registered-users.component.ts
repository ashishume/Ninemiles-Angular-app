import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';
import { ErrorServiceService } from 'src/app/shared/services/error-service/error-service.service';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {
  userTypes = [];
  paymentStatus = [
    true,
    false
  ]
  constructor(private apiService: ApiService, private snack: ErrorServiceService) { }
  registeredUsers;
  ngOnInit() {


    this.userTypes = this.apiService.getUserTypes()

    let registeredUsers = [];
    this.apiService.listAllUsers().subscribe((data: any) => {
      if (data.status == 200) {
        data.body.forEach(element => {
          if (element.email != localStorage.getItem('email')) {
            registeredUsers.push(element)
          }
        });
        this.registeredUsers = registeredUsers;
      }
    })
  }
  setPaymentStatus(item, list) {
    const body = {
      email: list.email,
      paymentStatus: item
    }
    this.apiService.setPaymentStatus(body).subscribe((data: any) => {
      this.ngOnInit();
    })
  }


  changeUserType(userType, email) {
    const body = {
      email: email,
      userType: userType
    }

    this.apiService.updateUserType(body).subscribe((data: any) => {
      if (data.status == 200) {
        this.snack.showError("User Type updated successfully")
        this.ngOnInit()
      }
    })

  }



}
