import { ApiService } from 'src/app/shared/services/api.service';
import { Injectable, NgZone } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import * as Rx from 'rxjs';
import { MatDialog, MatDialogConfig } from '@angular/material';
import { InfoPageComponent } from '../components/info-page/info-page.component';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public userData: any;
  public getName = new Rx.Subject();
  public getEmail = new Rx.Subject();
  public getPhotoURL = new Rx.Subject();

  constructor(
    private afs: AngularFirestore, // Inject Firestore service
    private afAuth: AngularFireAuth, // Inject Firebase auth service
    private router: Router,
    public matDialog: MatDialog,
    private ngZone: NgZone,
    private apiService: ApiService
  ) { }


  // get isLoggedIn(): boolean {
  //   if (
  //     this.designationStatus === 10 ||
  //     this.designationStatus === 11 ||
  //     this.designationStatus === 12 ||
  //     this.designationStatus === 13
  //   ) {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // }

  // get authorization(): string {
  //   if (this.designationStatus === 13) {
  //     return 'isFM';
  //   }
  //   if (this.designationStatus === 11) {
  //     return 'isHR';
  //   }
  //   if (this.designationStatus === 12) {
  //     return 'isProjectManager';
  //   }
  // }

  // Sign in with Googleuserlogin
  GoogleAuth() {
    const provider = new auth.GoogleAuthProvider();
    return this.AuthLogin(provider);
  }

  // Auth logic to run auth providers
  AuthLogin(provider) {
    return this.afAuth.auth
      .signInWithPopup(provider)
      .then((result: any) => {
        this.ngZone.run(() => {

          // this.getEmail.next(result.user.email)
          // this.getName.next(result.user.photoURL)
          // this.getPhotoURL.next(result.user.displayName)


          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.width = '500px';
          dialogConfig.height = '500px';

          const body = {
            "name": result.user.displayName,
            "email": result.user.email,
            "profileImageUrl": result.user.photoURL
          }

          this.apiService.login(body).subscribe((data: any) => {
            if (data.status == 200) {
              localStorage.setItem('name', result.user.displayName)
              localStorage.setItem('email', result.user.email)
              localStorage.setItem('photoURL', result.user.photoURL)
              if (data.body.registrationStatus == 0) {
                this.insertTestData(result.user.email);
              } else {
                this.router.navigate(['dashboard'])

              }
            }
          })
        });
      })
      .catch(error => {
        window.alert(error);
      });
  }


  insertTestData(userEmail) {
    const email = {
      email: userEmail
    }
    this.apiService.addTestData(email).subscribe((data: any) => {
      if (data.status == 200) {
        this.router.navigate(['dashboard'])
      }
    })
  }

  SetUserData(user) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );
    const userData: any = {
      uid: user.uid,
      email: user.email,
      displayName: user.displayName,
      photoURL: user.photoURL,
      emailVerified: user.emailVerified
    };
    return userRef.set(userData, {
      merge: true
    });
  }
  // Sign out
  SignOut() {
    return this.afAuth.auth.signOut().then(() => {
      localStorage.clear();
      this.getEmail.next('')
      this.getName.next('')
      this.getPhotoURL.next('')
      this.router.navigate(['']);
    });
  }
}
