import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTestStatusComponent } from './update-test-status.component';

describe('UpdateTestStatusComponent', () => {
  let component: UpdateTestStatusComponent;
  let fixture: ComponentFixture<UpdateTestStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateTestStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTestStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
