import { Component } from '@angular/core';
import { Ejercicio2MensajesComponent } from '../ejercicio2-mensajes/ejercicio2.component';
import { Ejercicio3PersonaComponent } from "../ejercicio3-persona/ejercicio3.component";
import { Ejercicio4ArrayComponent } from "../ejercicio4-array/ejercicio4.component";
import { Ejercicio7SearchbarComponent } from "../ejercicio7-searchbar/ejercicio7-searchbar.component";

@Component({
  selector: 'app-ejercicios',
  imports: [Ejercicio2MensajesComponent, Ejercicio3PersonaComponent, Ejercicio4ArrayComponent, Ejercicio7SearchbarComponent],
  templateUrl: './ejercicios.component.html',
  styleUrl: './ejercicios.component.css'
})
export class EjerciciosComponent {

}
