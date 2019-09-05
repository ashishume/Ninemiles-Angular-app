import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFillBlankQuestionsComponent } from './add-fill-blank-questions.component';

describe('AddFillBlankQuestionsComponent', () => {
  let component: AddFillBlankQuestionsComponent;
  let fixture: ComponentFixture<AddFillBlankQuestionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFillBlankQuestionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFillBlankQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
