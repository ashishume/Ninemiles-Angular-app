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

@NgModule({
  declarations: [
    AddFillBlankQuestionsComponent,
    AddParagraphComponent,
    AddQuestionsComponent,
    AdminPanelComponent,
    RegisteredUsersComponent,

  ],
  imports: [
    QuillModule.forRoot(),
    CommonModule,
    SharedModule,
    AdminPanelRoutingModule
  ], exports: [
    AddFillBlankQuestionsComponent,
    AddParagraphComponent,
    AddQuestionsComponent,
    AdminPanelComponent,
    RegisteredUsersComponent
  ]
})
export class AdminPanelModule { }
