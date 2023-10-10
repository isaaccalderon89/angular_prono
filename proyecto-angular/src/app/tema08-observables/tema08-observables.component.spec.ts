import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema08ObservablesComponent } from './tema08-observables.component';

describe('Tema08ObservablesComponent', () => {
  let component: Tema08ObservablesComponent;
  let fixture: ComponentFixture<Tema08ObservablesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tema08ObservablesComponent]
    });
    fixture = TestBed.createComponent(Tema08ObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
