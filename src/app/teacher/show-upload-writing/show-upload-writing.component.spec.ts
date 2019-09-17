import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowUploadWritingComponent } from './show-upload-writing.component';

describe('ShowUploadWritingComponent', () => {
  let component: ShowUploadWritingComponent;
  let fixture: ComponentFixture<ShowUploadWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowUploadWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowUploadWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
