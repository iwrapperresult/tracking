import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationTrackComponent } from './location-track.component';

describe('LocationTrackComponent', () => {
  let component: LocationTrackComponent;
  let fixture: ComponentFixture<LocationTrackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocationTrackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocationTrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
