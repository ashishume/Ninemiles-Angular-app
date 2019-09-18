import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeningAdminComponent } from './listening-admin.component';

describe('ListeningAdminComponent', () => {
  let component: ListeningAdminComponent;
  let fixture: ComponentFixture<ListeningAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeningAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeningAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
