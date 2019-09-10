import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/services/shared.module';
import { QuillModule } from 'ngx-quill';
import { TeacherComponent } from './teacher.component';
import { TeacherRoutingModule } from './teacher-routing.module';

@NgModule({
  declarations: [
    TeacherComponent
  ],
  imports: [
    QuillModule.forRoot(),
    CommonModule,
    SharedModule,
    TeacherRoutingModule
  ], exports: [
    TeacherComponent
  ]
})
export class TeacherModule { }
