import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoVendehumoComponent } from './nuevo-vendehumo.component';

describe('NuevoVendehumoComponent', () => {
  let component: NuevoVendehumoComponent;
  let fixture: ComponentFixture<NuevoVendehumoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuevoVendehumoComponent]
    });
    fixture = TestBed.createComponent(NuevoVendehumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
