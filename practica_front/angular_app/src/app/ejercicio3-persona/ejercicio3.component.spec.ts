import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio3PersonaComponent } from './ejercicio3.component';

describe('Ejercicio3Component', () => {
  let component: Ejercicio3PersonaComponent;
  let fixture: ComponentFixture<Ejercicio3PersonaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio3PersonaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio3PersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
