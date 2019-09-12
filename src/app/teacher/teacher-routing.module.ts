import { AudioTestComponent } from './audio-test/audio-test.component';
import { TeacherComponent } from './teacher.component';
import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { UploadAnswerSheetComponent } from './upload-answer-sheet/upload-answer-sheet.component';
import { RaisedIssueComponent } from './raised-issue/raised-issue.component';

const route: Routes = [
  { path: '', component: TeacherComponent },
  { path: 'upload-answer-sheet', component: UploadAnswerSheetComponent },
  { path: 'audio-test', component: AudioTestComponent },
  { path: 'raised-issue', component: RaisedIssueComponent },
  {
    path: '',
    redirectTo: 'teacher',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class TeacherRoutingModule { }
