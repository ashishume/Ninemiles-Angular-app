import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingAdminComponent } from './writing-admin.component';

describe('WritingAdminComponent', () => {
  let component: WritingAdminComponent;
  let fixture: ComponentFixture<WritingAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WritingAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WritingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
