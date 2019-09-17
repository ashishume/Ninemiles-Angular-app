import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowWritingComponent } from './show-writing.component';

describe('ShowWritingComponent', () => {
  let component: ShowWritingComponent;
  let fixture: ComponentFixture<ShowWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
