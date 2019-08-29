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

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'academic-test', component: AcademicTestComponent },
  { path: 'general-test', component: GeneralTestComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'add-questions', component: AddQuestionsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'speaking', component: SpeakingComponent },
  { path: 'listening', component: ListeningComponent },
  { path: 'reading', component: ReadingComponent },
  { path: 'writing', component: WritingComponent },
  { path: 'section', component: SectionComponent },
  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
