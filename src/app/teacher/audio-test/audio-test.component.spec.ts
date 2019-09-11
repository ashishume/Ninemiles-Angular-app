import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AudioTestComponent } from './audio-test.component';

describe('AudioTestComponent', () => {
  let component: AudioTestComponent;
  let fixture: ComponentFixture<AudioTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AudioTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AudioTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
