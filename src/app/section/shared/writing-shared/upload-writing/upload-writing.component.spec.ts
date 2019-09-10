import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadWritingComponent } from './upload-writing.component';

describe('UploadWritingComponent', () => {
  let component: UploadWritingComponent;
  let fixture: ComponentFixture<UploadWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
