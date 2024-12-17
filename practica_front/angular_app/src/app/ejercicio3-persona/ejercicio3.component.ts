import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3-persona',
  imports: [],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3PersonaComponent {
  persona = {
    nombre: 'Marisol Torres',
    edad: 25,
    email: 'marisooltorrees@gmail.com',
    activo: true
  };
}
