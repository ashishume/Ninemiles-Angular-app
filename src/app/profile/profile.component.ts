import { ApiService } from 'src/app/shared/services/api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private apiService: ApiService) { }
  userDetails: any;
  ngOnInit() {
    var query = {
      email: localStorage.getItem('email')
    }
    this.apiService.getProfileDetails(query).subscribe((data: any) => {
      this.userDetails = data.body;
      
    })
  }

}
