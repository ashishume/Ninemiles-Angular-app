import { UploadWritingComponent } from './shared/writing-shared/upload-writing/upload-writing.component';
import { SectionComponent } from './section.component';
import { WritingComponent } from './writing/writing.component';
import { ListeningComponent } from './listening/listening.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadingComponent } from './reading/reading.component';
import { SpeakingComponent } from './speaking/speaking.component';



const route: Routes = [
  {
    path: '',
    component: SectionComponent
  },
  {
    path: 'listening',
    component: ListeningComponent
  },
  {
    path: 'reading',
    component: ReadingComponent
  },
  {
    path: 'writing',
    component: WritingComponent
  },
  {
    path: 'speaking',
    component: SpeakingComponent
  },
  {
    path: 'upload-writing',
    component: UploadWritingComponent
  },
  {
    path: '',
    redirectTo: 'section',
    pathMatch: 'full'
  }

];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(route)],
  exports: [RouterModule]
})
export class SectionRoutingModule { }
