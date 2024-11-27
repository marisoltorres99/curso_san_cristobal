import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio2Component } from "./ejercicio2/ejercicio2.component";
import { Ejercicio3Component } from "./ejercicio3/ejercicio3.component";
import { Ejercicio4Component } from "./ejercicio4/ejercicio4.component";
import { Ejercicio5Component } from './ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './ejercicio6/ejercicio6.component';
import { Ejercicio7SearchbarComponent } from "./ejercicio7-searchbar/ejercicio7-searchbar.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ejercicio2Component, Ejercicio3Component, Ejercicio4Component, Ejercicio5Component, Ejercicio6Component, Ejercicio7SearchbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_app';
}
