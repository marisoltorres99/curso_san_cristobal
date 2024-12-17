import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio5HeaderComponent } from './ejercicio5.component';

describe('Ejercicio5Component', () => {
  let component: Ejercicio5HeaderComponent;
  let fixture: ComponentFixture<Ejercicio5HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio5HeaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio5HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
