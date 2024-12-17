import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio4ArrayComponent } from './ejercicio4.component';

describe('Ejercicio4Component', () => {
  let component: Ejercicio4ArrayComponent;
  let fixture: ComponentFixture<Ejercicio4ArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio4ArrayComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio4ArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
