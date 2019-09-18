import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakingAdminComponent } from './speaking-admin.component';

describe('SpeakingAdminComponent', () => {
  let component: SpeakingAdminComponent;
  let fixture: ComponentFixture<SpeakingAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpeakingAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpeakingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
