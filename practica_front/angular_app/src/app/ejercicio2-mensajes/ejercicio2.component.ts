import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2-mensajes',
  imports: [NgIf],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2MensajesComponent {
  mensaje1: string =  '¡Hola Curso Fullstack!';
  mensaje2: string =  '¡Hola Angular App!';
  bandera: boolean =  false;
}
