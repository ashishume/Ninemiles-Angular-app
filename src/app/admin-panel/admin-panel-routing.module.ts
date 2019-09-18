import { WritingAdminComponent } from './sections-admin/writing-admin/writing-admin.component';
import { ListeningAdminComponent } from './sections-admin/listening-admin/listening-admin.component';
import { UpdateTestStatusComponent } from './update-test-status/update-test-status.component';
import { AdminPanelComponent } from './admin-panel.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { AddFillBlankQuestionsComponent } from './add-fill-blank-questions/add-fill-blank-questions.component';
import { AddParagraphComponent } from './add-paragraph/add-paragraph.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { RaisedIssueComponent } from './raised-issue/raised-issue.component';
import { SectionsAdminComponent } from './sections-admin/sections-admin.component';
import { SpeakingAdminComponent } from './sections-admin/speaking-admin/speaking-admin.component';
import { ReadingAdminComponent } from './sections-admin/reading-admin/reading-admin.component';

const route: Routes = [
  { path: '', component: AdminPanelComponent },
  { path: 'add-questions', component: AddQuestionsComponent },
  { path: 'add-fill-blank-questions', component: AddFillBlankQuestionsComponent },
  { path: 'add-paragraph', component: AddParagraphComponent },
  { path: 'registered-users', component: RegisteredUsersComponent },
  { path: 'update-test-status', component: UpdateTestStatusComponent },
  { path: 'raised-issue', component: RaisedIssueComponent },
  { path: 'sections-admin', component: SectionsAdminComponent },
  { path: 'listening-admin', component: ListeningAdminComponent },
  { path: 'speaking-admin', component: SpeakingAdminComponent },
  { path: 'writing-admin', component: WritingAdminComponent },
  { path: 'reading-admin', component: ReadingAdminComponent },

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
