import { AuthService } from './../shared/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  model = {
    left: true,
    middle: false,
    right: false
  };
  constructor(private authService:AuthService) { }

  ngOnInit() {
  }

}
