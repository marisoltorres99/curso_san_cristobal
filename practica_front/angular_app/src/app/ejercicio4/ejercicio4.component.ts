import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejercicio4',
  imports: [NgFor],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  puestos = ["primero", "segundo", "tercero", "cuarto"]
}
