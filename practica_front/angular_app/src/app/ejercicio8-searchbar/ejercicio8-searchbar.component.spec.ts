import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio8SearchbarComponent } from './ejercicio8-searchbar.component';

describe('Ejercicio7SearchbarComponent', () => {
  let component: Ejercicio8SearchbarComponent;
  let fixture: ComponentFixture<Ejercicio8SearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio8SearchbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio8SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
