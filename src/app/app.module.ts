import { SpeakingService } from './section/shared/speaking-shared/speaking.service';
import { CalculateMarksService } from './shared/services/calculate-marks/calculate-marks.service';
import { BootstrapModule } from './bootstrap.module';
import { LoaderService } from './shared/services/loader-service/loader.service';
import { HttpService } from './shared/services/http-service/http.service';
import { ApiService } from './shared/services/api-service/api.service';
import { AuthService } from './shared/services/auth-service/auth.service';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InterceptorService } from './shared/services/interceptor-service/interceptor.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AcademicTestComponent } from './tests/academic-test/academic-test.component';
import { GeneralTestComponent } from './tests/general-test/general-test.component';
import { AddQuestionsComponent } from './admin-panel/add-questions/add-questions.component';
import { LayoutModule } from '@angular/cdk/layout';
import { QuillModule } from 'ngx-quill';
import { MainNavComponent } from './shared/components/main-nav/main-nav.component';
import { AddParagraphComponent } from './admin-panel/add-paragraph/add-paragraph.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { InfoPageComponent } from './shared/components/info-page/info-page.component';
import { ProfileComponent } from './profile/profile.component';
import { SpeakingComponent } from './section/speaking/speaking.component';
import { ListeningComponent } from './section/listening/listening.component';
import { WritingComponent } from './section/writing/writing.component';
import { ReadingComponent } from './section/reading/reading.component'
import { SectionComponent } from './section/section.component';
import { RegisteredUsersComponent } from './admin-panel/registered-users/registered-users.component';
import { SnackBarComponent } from './shared/components/snack-bar/snack-bar.component';
import { NavbarService } from './shared/services/navbar-service/navbar.service';
import { AddFillBlankQuestionsComponent } from './admin-panel/add-fill-blank-questions/add-fill-blank-questions.component';
import { ReadingService } from './section/shared/reading-shared/reading.service';
import { ListeningService } from './section/shared/listening-shared/listening.service';
import { WritingService } from './section/shared/writing-shared/writing.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DashboardComponent,
    AdminPanelComponent,
    LoaderComponent,
    PageNotFoundComponent,
    AcademicTestComponent,
    GeneralTestComponent,
    AddQuestionsComponent,
    MainNavComponent,
    AddParagraphComponent,
    SignInComponent,
    InfoPageComponent,
    ProfileComponent,
    SpeakingComponent,
    ListeningComponent,
    WritingComponent,
    ReadingComponent,
    SectionComponent,
    RegisteredUsersComponent,
    SnackBarComponent,
    AddFillBlankQuestionsComponent,

  ],
  imports: [
    QuillModule.forRoot(),
    BootstrapModule,
    BrowserModule,
    MaterialModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
  ],
  entryComponents: [InfoPageComponent,SnackBarComponent],
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
    CalculateMarksService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
