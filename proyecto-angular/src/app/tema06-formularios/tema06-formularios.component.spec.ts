import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tema06FormulariosComponent } from './tema06-formularios.component';

describe('Tema06FormulariosComponent', () => {
  let component: Tema06FormulariosComponent;
  let fixture: ComponentFixture<Tema06FormulariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Tema06FormulariosComponent]
    });
    fixture = TestBed.createComponent(Tema06FormulariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
