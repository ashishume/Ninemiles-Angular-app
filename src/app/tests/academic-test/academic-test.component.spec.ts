import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademicTestComponent } from './academic-test.component';

describe('AcademicTestComponent', () => {
  let component: AcademicTestComponent;
  let fixture: ComponentFixture<AcademicTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcademicTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcademicTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
