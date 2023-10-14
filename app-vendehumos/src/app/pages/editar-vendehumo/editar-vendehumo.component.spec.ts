import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVendehumoComponent } from './editar-vendehumo.component';

describe('EditarVendehumoComponent', () => {
  let component: EditarVendehumoComponent;
  let fixture: ComponentFixture<EditarVendehumoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditarVendehumoComponent]
    });
    fixture = TestBed.createComponent(EditarVendehumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
