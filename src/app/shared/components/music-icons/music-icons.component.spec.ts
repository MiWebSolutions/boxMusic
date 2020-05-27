import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicIconsComponent } from './music-icons.component';

describe('MusicIconsComponent', () => {
  let component: MusicIconsComponent;
  let fixture: ComponentFixture<MusicIconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicIconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
