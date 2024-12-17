import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio6FooterComponent } from './ejercicio6.component';

describe('Ejercicio6Component', () => {
  let component: Ejercicio6FooterComponent;
  let fixture: ComponentFixture<Ejercicio6FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio6FooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio6FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
