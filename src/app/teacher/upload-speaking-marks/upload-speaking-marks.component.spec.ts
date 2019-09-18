import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadSpeakingMarksComponent } from './upload-speaking-marks.component';

describe('UploadSpeakingMarksComponent', () => {
  let component: UploadSpeakingMarksComponent;
  let fixture: ComponentFixture<UploadSpeakingMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadSpeakingMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadSpeakingMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
