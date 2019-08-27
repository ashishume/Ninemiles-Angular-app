import { AddQuestionsComponent } from './admin-panel/add-questions/add-questions.component';
import { AcademicTestComponent } from './tests/academic-test/academic-test.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './shared/components/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GeneralTestComponent } from './tests/general-test/general-test.component';
import { StudentsComponent } from './students/students.component';
import { SectionComponent } from './students/section/section.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'academic-test', component: AcademicTestComponent },
  { path: 'general-test', component: GeneralTestComponent },
  { path: 'students', component: StudentsComponent },
  { path: 'add-questions', component: AddQuestionsComponent },
  { path: 'section', component: SectionComponent },

  { path: '**', component: PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
