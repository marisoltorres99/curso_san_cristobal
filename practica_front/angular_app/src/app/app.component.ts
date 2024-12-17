import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Ejercicio5Component } from './ejercicio5/ejercicio5.component';
import { Ejercicio6Component } from './ejercicio6/ejercicio6.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Ejercicio5Component, Ejercicio6Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_app';
}
