import { AddFillBlankQuestionsComponent } from './admin-panel/add-fill-blank-questions/add-fill-blank-questions.component';
import { AuthGuard } from './shared/guard/auth-guard.service';
import { AddQuestionsComponent } from './admin-panel/add-questions/add-questions.component';
import { AcademicTestComponent } from './tests/academic-test/academic-test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralTestComponent } from './tests/general-test/general-test.component';
import { StudentsComponent } from './students/students.component';
import { AddParagraphComponent } from './admin-panel/add-paragraph/add-paragraph.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ProfileComponent } from './profile/profile.component';
import { SpeakingComponent } from './section/speaking/speaking.component';
import { ListeningComponent } from './section/listening/listening.component';
import { ReadingComponent } from './section/reading/reading.component';
import { WritingComponent } from './section/writing/writing.component';
import { SectionComponent } from './section/section.component';
import { RegisteredUsersComponent } from './admin-panel/registered-users/registered-users.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'academic-test', component: AcademicTestComponent, canActivate: [AuthGuard] },
  { path: 'general-test', component: GeneralTestComponent, canActivate: [AuthGuard] },
  { path: 'students', component: StudentsComponent, canActivate: [AuthGuard] },
  { path: 'add-questions', component: AddQuestionsComponent, canActivate: [AuthGuard] },
  { path: 'add-fill-blank-questions', component: AddFillBlankQuestionsComponent, canActivate: [AuthGuard] },
  { path: 'add-paragraph', component: AddParagraphComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'speaking', component: SpeakingComponent, canActivate: [AuthGuard] },
  { path: 'listening', component: ListeningComponent, canActivate: [AuthGuard] },
  { path: 'reading', component: ReadingComponent, canActivate: [AuthGuard] },
  { path: 'writing', component: WritingComponent, canActivate: [AuthGuard] },
  { path: 'registered-users', component: RegisteredUsersComponent, canActivate: [AuthGuard] },
  { path: 'section/:id', component: SectionComponent, canActivate: [AuthGuard] },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
