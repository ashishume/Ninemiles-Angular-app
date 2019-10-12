import { SpeakingService } from './section/shared/speaking-shared/speaking.service';
import { CalculateMarksService } from './shared/services/calculate-marks/calculate-marks.service';
import { LoaderService } from './shared/services/loader-service/loader.service';
import { HttpService } from './shared/services/http-service/http.service';
import { ApiService } from './shared/services/api-service/api.service';
import { AuthService } from './shared/services/auth-service/auth.service';
import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { RaiseIssueFormComponent } from './raise-issue-form/raise-issue-form.component';
import { PaymentComponent } from './payment/payment.component';
import { InfoPageComponent } from './shared/components/info-page/info-page.component';
import { ProgressComponent } from './progress/progress.component';
import { PaymentSuccessComponent } from './payment-success/payment-success.component';
import { SpeakingDialogComponent } from './shared/components/speaking-dialog/speaking-dialog.component';
import { TestProgressComponent } from './test-progress/test-progress.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    PageNotFoundComponent,
    MainNavComponent,
    SignInComponent,
    ProfileComponent,
    SnackBarComponent,
    ResultsComponent,
    MarksSheetComponent,
    RaiseIssueFormComponent,
    PaymentComponent,
    InfoPageComponent,
    ProgressComponent,
    PaymentSuccessComponent,
    SpeakingDialogComponent,
    TestProgressComponent,


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
  entryComponents: [
    InfoPageComponent,
    SpeakingDialogComponent,
    SnackBarComponent,
    RaiseIssueFormComponent],
  providers: [
    AuthService,
    ApiService,
    HttpService,
    NavbarService,
    ReadingService,
    ListeningService,
    SpeakingService,
    WritingService,
    Title,
    LoaderService,
    ErrorServiceService,
    CalculateMarksService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
