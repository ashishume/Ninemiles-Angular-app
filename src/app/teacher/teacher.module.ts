import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/services/shared.module';
import { QuillModule } from 'ngx-quill';
import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';
import { UploadAnswerSheetComponent } from './upload-answer-sheet/upload-answer-sheet.component';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SelectDropDownModule } from 'ngx-select-dropdown';
import { ShowWritingComponent } from './show-writing/show-writing.component';
import { ShowUploadWritingComponent } from './show-upload-writing/show-upload-writing.component';
import { UploadWritingMarksComponent } from './upload-writing-marks/upload-writing-marks.component';
import { UploadSpeakingMarksComponent } from './upload-speaking-marks/upload-speaking-marks.component';

@NgModule({
  declarations: [
    TeacherComponent,
    UploadAnswerSheetComponent,
    ShowWritingComponent,
    ShowUploadWritingComponent,
    UploadWritingMarksComponent,
    UploadSpeakingMarksComponent,
  ],
  imports: [
    SelectDropDownModule,
    Ng2SearchPipeModule,
    NgxMatSelectSearchModule,
    QuillModule.forRoot(),
    CommonModule,
    SharedModule,
    TeacherRoutingModule
  ], exports: [
    TeacherComponent
  ]
})
export class TeacherModule { }
