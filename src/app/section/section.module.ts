import { SectionComponent } from './section.component';
import { ListeningComponent } from './listening/listening.component';
import { WritingComponent } from './writing/writing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadingComponent } from './reading/reading.component';
import { SpeakingComponent } from './speaking/speaking.component';
import { SharedModule } from '../shared/services/shared.module';
import { SectionRoutingModule } from './section-routing.module';
import { QuillModule } from 'ngx-quill';
import { CountdownModule } from 'ngx-countdown';
import { WritingDialogComponent } from './shared/writing-shared/writing-dialog/writing-dialog.component';
import { UploadWritingComponent } from './shared/writing-shared/upload-writing/upload-writing.component';
import { TestDescriptionComponent } from './test-description/test-description.component';

@NgModule({
  declarations: [
    ReadingComponent,
    WritingComponent,
    ListeningComponent,
    SpeakingComponent,
    SectionComponent,
    WritingDialogComponent,
    UploadWritingComponent,
    TestDescriptionComponent
  ],
  imports: [
    QuillModule.forRoot(),
    CommonModule,
    SharedModule,
    SectionRoutingModule,
    CountdownModule
  ],
  exports: [
    ReadingComponent,
    WritingComponent,
    ListeningComponent,
    SpeakingComponent,
    SectionComponent
  ],
  entryComponents: [
    WritingDialogComponent
  ]
})
export class SectionModule { }
