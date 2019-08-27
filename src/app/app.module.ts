import { BootstrapModule } from './bootstrap.module';
import { LoaderService } from './shared/services/loader.service';
import { HttpService } from './shared/services/http.service';
import { ApiService } from './shared/services/api.service';
import { AuthService } from './shared/services/auth.service';
import { MaterialModule } from './material.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { InterceptorService } from './shared/services/interceptor.service';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule, MatToolbarModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { AcademicTestComponent } from './tests/academic-test/academic-test.component';
import { GeneralTestComponent } from './tests/general-test/general-test.component';
import { AddQuestionsComponent } from './admin-panel/add-questions/add-questions.component';
import { SectionComponent } from './students/section/section.component';
import { LayoutModule } from '@angular/cdk/layout';
import { QuillModule } from 'ngx-quill'


@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    DashboardComponent,
    HomeComponent,
    AdminPanelComponent,
    LoaderComponent,
    PageNotFoundComponent,
    AcademicTestComponent,
    GeneralTestComponent,
    AddQuestionsComponent,
    SectionComponent
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
  providers: [
    AuthService,
    ApiService,
    HttpService,
    LoaderService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
