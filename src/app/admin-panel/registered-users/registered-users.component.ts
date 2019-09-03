import { ApiService } from 'src/app/shared/services/api-service/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registered-users',
  templateUrl: './registered-users.component.html',
  styleUrls: ['./registered-users.component.css']
})
export class RegisteredUsersComponent implements OnInit {

  paymentStatus = [
    true,
    false
  ]
  constructor(private apiService: ApiService) { }
  registeredUsers;
  ngOnInit() {
    this.apiService.listAllUsers().subscribe((data: any) => {
      if (data.status == 200) {
        this.registeredUsers = data.body;
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
}
