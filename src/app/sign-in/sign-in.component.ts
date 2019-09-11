import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  model = {
    left: true,
    middle: false,
    right: false
  };
  constructor(
    public authService: AuthService,
    private route: Router
  ) { }

  email;
  ngOnInit() {
    this.authService.getEmail.subscribe((data: any) => {
      this.email = data;
    })
    if (this.email == null) {
      this.email = localStorage.getItem('email');
    }

    if (this.email) {
      this.route.navigate(['dashboard']);
    }
  }

}
