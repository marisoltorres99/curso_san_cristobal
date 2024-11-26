import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio2Component } from "./ejercicio2/ejercicio2.component";
import { Ejercicio3Component } from "./ejercicio3/ejercicio3.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ejercicio2Component, Ejercicio3Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_app';
}
