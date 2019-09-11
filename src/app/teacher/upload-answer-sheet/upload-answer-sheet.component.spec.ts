import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadAnswerSheetComponent } from './upload-answer-sheet.component';

describe('UploadAnswerSheetComponent', () => {
  let component: UploadAnswerSheetComponent;
  let fixture: ComponentFixture<UploadAnswerSheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadAnswerSheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadAnswerSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
