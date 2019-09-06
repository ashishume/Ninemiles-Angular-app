import { AdminPanelComponent } from './admin-panel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { AddFillBlankQuestionsComponent } from './add-fill-blank-questions/add-fill-blank-questions.component';
import { AddParagraphComponent } from './add-paragraph/add-paragraph.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';

const route: Routes = [
  { path: '', component: AdminPanelComponent },
  { path: 'add-questions', component: AddQuestionsComponent },
  { path: 'add-fill-blank-questions', component: AddFillBlankQuestionsComponent },
  { path: 'add-paragraph', component: AddParagraphComponent },
  { path: 'registered-users', component: RegisteredUsersComponent },
  {
    path: '',
    redirectTo: 'admin-panel',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class AdminPanelRoutingModule { }
