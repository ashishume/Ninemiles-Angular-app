import { SpeakingService } from './section/shared/speaking-shared/speaking.service';
import { CalculateMarksService } from './shared/services/calculate-marks/calculate-marks.service';
import { LoaderService } from './shared/services/loader-service/loader.service';
import { HttpService } from './shared/services/http-service/http.service';
import { ApiService } from './shared/services/api-service/api.service';
import { AuthService } from './shared/services/auth-service/auth.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './shared/services/interceptor-service/interceptor.service';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { InfoPageComponent } from './shared/components/info-page/info-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SnackBarComponent } from './shared/components/snack-bar/snack-bar.component';
import { NavbarService } from './shared/services/navbar-service/navbar.service';
import { ReadingService } from './section/shared/reading-shared/reading.service';
import { ListeningService } from './section/shared/listening-shared/listening.service';
import { WritingService } from './section/shared/writing-shared/writing.service';
import { SharedModule } from './shared/services/shared.module';
import { ErrorServiceService } from './shared/services/error-service/error-service.service';
import { ResultsComponent } from './results/results.component';
import { MarksSheetComponent } from './marks-sheet/marks-sheet.component';



@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DashboardComponent,
    PageNotFoundComponent,
    MainNavComponent,
    SignInComponent,
    InfoPageComponent,
    ProfileComponent,
    SnackBarComponent,
    ResultsComponent,
    MarksSheetComponent,


  ],
  imports: [
    AngularFireDatabaseModule,
    AngularFireStorageModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    SharedModule,
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,

  ],
  entryComponents: [InfoPageComponent, SnackBarComponent],
  providers: [
    AuthService,
    ApiService,
    HttpService,
    NavbarService,
    ReadingService,
    ListeningService,
    SpeakingService,
    WritingService,
    LoaderService,
    ErrorServiceService,
    CalculateMarksService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
