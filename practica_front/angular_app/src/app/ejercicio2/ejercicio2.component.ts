import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio2',
  imports: [NgIf],
  templateUrl: './ejercicio2.component.html',
  styleUrl: './ejercicio2.component.css'
})
export class Ejercicio2Component {
  mensaje1: string =  'Mensaje 1';
  mensaje2: string =  'Mensaje 2';
  falso: boolean =  false;
}
