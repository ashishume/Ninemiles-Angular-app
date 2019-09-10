import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingDialogComponent } from './writing-dialog.component';

describe('WritingDialogComponent', () => {
  let component: WritingDialogComponent;
  let fixture: ComponentFixture<WritingDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
