import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWritingQuestionComponent } from './show-writing-question.component';

describe('ShowWritingQuestionComponent', () => {
  let component: ShowWritingQuestionComponent;
  let fixture: ComponentFixture<ShowWritingQuestionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWritingQuestionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWritingQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
