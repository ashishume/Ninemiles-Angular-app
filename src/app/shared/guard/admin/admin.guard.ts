import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate{
  constructor(public authService: AuthService, public router: Router) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {

    if (this.authService.isAdmin !== true) {
      this.router.navigate(['']);
    }
    return true;
  }
}
