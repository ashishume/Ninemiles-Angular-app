import { Injectable, NgZone } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreDocument
} from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';
import * as Rx from 'rxjs';


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
    private ngZone: NgZone,
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
          localStorage.setItem('name', result.user.displayName)
          localStorage.setItem('email', result.user.email)
          localStorage.setItem('photoURL', result.user.photoURL)
          this.getEmail.next(result.user.email)
          this.getName.next(result.user.photoURL)
          this.getPhotoURL.next(result.user.displayName)

        });
      })
      .catch(error => {
        window.alert(error);
      });
  }

  /* Setting up user data when sign in with username/password,
  sign up with username/password and sign in with social auth
  provider in Firestore database using AngularFirestore + AngularFirestoreDocument service */

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
