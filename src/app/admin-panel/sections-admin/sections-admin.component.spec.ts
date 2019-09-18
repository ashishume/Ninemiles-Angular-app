import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsAdminComponent } from './sections-admin.component';

describe('SectionsAdminComponent', () => {
  let component: SectionsAdminComponent;
  let fixture: ComponentFixture<SectionsAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionsAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
