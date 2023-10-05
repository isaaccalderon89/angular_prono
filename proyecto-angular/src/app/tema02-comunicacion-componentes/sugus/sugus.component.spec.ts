import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SugusComponent } from './sugus.component';

describe('SugusComponent', () => {
  let component: SugusComponent;
  let fixture: ComponentFixture<SugusComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SugusComponent]
    });
    fixture = TestBed.createComponent(SugusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
