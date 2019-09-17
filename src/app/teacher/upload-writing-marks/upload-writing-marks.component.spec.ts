import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadWritingMarksComponent } from './upload-writing-marks.component';

describe('UploadWritingMarksComponent', () => {
  let component: UploadWritingMarksComponent;
  let fixture: ComponentFixture<UploadWritingMarksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadWritingMarksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadWritingMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
