import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio2MensajesComponent } from './ejercicio2.component';

describe('HeaderComponent', () => {
  let component: Ejercicio2MensajesComponent;
  let fixture: ComponentFixture<Ejercicio2MensajesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio2MensajesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio2MensajesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
