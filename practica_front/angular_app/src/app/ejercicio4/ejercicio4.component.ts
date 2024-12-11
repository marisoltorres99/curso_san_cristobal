import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { ServicioService } from '../servicio.service';

@Component({
  selector: 'app-ejercicio4',
  imports: [NgFor],
  templateUrl: './ejercicio4.component.html',
  styleUrl: './ejercicio4.component.css'
})
export class Ejercicio4Component {
  
  puestos: string[] = [];
  constructor(private servicio: ServicioService){}

  ngOnInit(): void {
    this.puestos = this.servicio.getPuestos();
  }
}
