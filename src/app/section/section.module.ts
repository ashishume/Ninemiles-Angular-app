import { SectionComponent } from './section.component';
import { ListeningComponent } from './listening/listening.component';
import { WritingComponent } from './writing/writing.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReadingComponent } from './reading/reading.component';
import { SpeakingComponent } from './speaking/speaking.component';
import { SharedModule } from '../shared/services/shared.module';
import { SectionRoutingModule } from './section-routing.module';

@NgModule({
  declarations: [
    ReadingComponent,
    WritingComponent,
    ListeningComponent,
    SpeakingComponent,
    SectionComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SectionRoutingModule
  ],
  exports: [
    ReadingComponent,
    WritingComponent,
    ListeningComponent,
    SpeakingComponent,
    SectionComponent
  ]
})
export class SectionModule { }
