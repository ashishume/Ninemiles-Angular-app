import { AdminPanelRoutingModule } from './admin-panel-routing.module';
import { AdminPanelComponent } from './admin-panel.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { AddParagraphComponent } from './add-paragraph/add-paragraph.component';
import { AddFillBlankQuestionsComponent } from './add-fill-blank-questions/add-fill-blank-questions.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/services/shared.module';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';
import { QuillModule } from 'ngx-quill';
import { UpdateTestStatusComponent } from './update-test-status/update-test-status.component';
import { RaisedIssueComponent } from './raised-issue/raised-issue.component';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ReadingAdminComponent } from './sections-admin/reading-admin/reading-admin.component';
import { SectionsAdminComponent } from './sections-admin/sections-admin.component';
import { ListeningAdminComponent } from './sections-admin/listening-admin/listening-admin.component';
import { WritingAdminComponent } from './sections-admin/writing-admin/writing-admin.component';
import { CountdownModule } from 'ngx-countdown';
import { NoRightClickDirective } from '../no-right-click.directive';

@NgModule({
  declarations: [
    AddFillBlankQuestionsComponent,
    AddParagraphComponent,
    AddQuestionsComponent,
    AdminPanelComponent,
    RegisteredUsersComponent,
    UpdateTestStatusComponent,
    RaisedIssueComponent,
    ReadingAdminComponent,
    SectionsAdminComponent,
    ListeningAdminComponent,
    WritingAdminComponent,
    NoRightClickDirective
  ],
  imports: [
    CountdownModule,
    SelectDropDownModule,
    QuillModule.forRoot(),
    CommonModule,
    SharedModule,
    AdminPanelRoutingModule
  ],
  exports: [
    UpdateTestStatusComponent,
    RaisedIssueComponent,
    AddFillBlankQuestionsComponent,
    AddParagraphComponent,
    AddQuestionsComponent,
    AdminPanelComponent,
    RegisteredUsersComponent
  ],
})
export class AdminPanelModule { }
