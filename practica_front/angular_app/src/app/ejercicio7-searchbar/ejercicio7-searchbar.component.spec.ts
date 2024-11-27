import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Ejercicio7SearchbarComponent } from './ejercicio7-searchbar.component';

describe('Ejercicio7SearchbarComponent', () => {
  let component: Ejercicio7SearchbarComponent;
  let fixture: ComponentFixture<Ejercicio7SearchbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio7SearchbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Ejercicio7SearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
