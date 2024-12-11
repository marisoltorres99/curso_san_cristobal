import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  private puestos = ["primero", "segundo", "tercero", "cuarto"]

  constructor() { }

  getPuestos(): string[] {
    return this.puestos;
  }
}
