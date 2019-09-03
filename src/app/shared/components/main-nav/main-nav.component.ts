import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from '../../services/auth-service/auth.service';

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
  constructor(private breakpointObserver: BreakpointObserver, public authService: AuthService) {


    this.authService.getEmail.subscribe(emailData => {
      this.email = emailData;
    })
    if (this.email == null) {
      this.email = localStorage.getItem('email')
    }

  }
}
