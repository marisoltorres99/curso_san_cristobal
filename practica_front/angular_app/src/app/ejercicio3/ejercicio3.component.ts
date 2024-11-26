import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio3',
  imports: [],
  templateUrl: './ejercicio3.component.html',
  styleUrl: './ejercicio3.component.css'
})
export class Ejercicio3Component {
  persona = {
    nombre: 'Marisol Torres',
    edad: 25,
    email: 'marisoltorresgmail.com',
    activo: true
  };
}
