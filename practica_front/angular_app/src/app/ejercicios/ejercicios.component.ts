import { Component } from '@angular/core';
import { Ejercicio2MensajesComponent } from '../ejercicio2-mensajes/ejercicio2.component';
import { Ejercicio3Component } from "../ejercicio3/ejercicio3.component";
import { Ejercicio4Component } from "../ejercicio4/ejercicio4.component";
import { Ejercicio7SearchbarComponent } from "../ejercicio7-searchbar/ejercicio7-searchbar.component";

@Component({
  selector: 'app-ejercicios',
  imports: [Ejercicio2MensajesComponent, Ejercicio3Component, Ejercicio4Component, Ejercicio7SearchbarComponent],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css'
})
export class EjerciciosComponent {

}
