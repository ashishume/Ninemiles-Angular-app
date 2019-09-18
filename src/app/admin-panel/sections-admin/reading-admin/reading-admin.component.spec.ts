import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadingAdminComponent } from './reading-admin.component';

describe('ReadingAdminComponent', () => {
  let component: ReadingAdminComponent;
  let fixture: ComponentFixture<ReadingAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReadingAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
