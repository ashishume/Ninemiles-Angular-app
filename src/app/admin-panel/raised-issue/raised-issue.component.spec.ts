import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RaisedIssueComponent } from './raised-issue.component';

describe('RaisedIssueComponent', () => {
  let component: RaisedIssueComponent;
  let fixture: ComponentFixture<RaisedIssueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaisedIssueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RaisedIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
