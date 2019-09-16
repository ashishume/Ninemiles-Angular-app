import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth-service/auth.service';
import { NavbarService } from '../../services/navbar-service/navbar.service';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  email;
  userType;
  constructor(
    private breakpointObserver: BreakpointObserver,
    public authService: AuthService,
    public nav: NavbarService) {
    this.authService.getEmail.subscribe(emailData => {
      this.email = emailData;
    })
    if (this.email == null) {
      this.email = localStorage.getItem('email')
    }

    this.authService.userType.subscribe(type => {
      this.userType = type;
    })
    if (this.userType == null) {
      this.userType = localStorage.getItem('userType')
    }

    if (this.userType == "Teacher" || this.userType == "Admin") {
      this.nav.show()
    } else {
      this.nav.hide()
    }

  }
}
