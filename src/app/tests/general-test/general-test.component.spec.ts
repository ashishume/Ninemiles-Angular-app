import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralTestComponent } from './general-test.component';

describe('GeneralTestComponent', () => {
  let component: GeneralTestComponent;
  let fixture: ComponentFixture<GeneralTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneralTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneralTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
