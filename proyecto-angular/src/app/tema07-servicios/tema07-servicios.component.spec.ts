import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema07ServiciosComponent } from './tema07-servicios.component';

describe('Tema07ServiciosComponent', () => {
  let component: Tema07ServiciosComponent;
  let fixture: ComponentFixture<Tema07ServiciosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tema07ServiciosComponent]
    });
    fixture = TestBed.createComponent(Tema07ServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
