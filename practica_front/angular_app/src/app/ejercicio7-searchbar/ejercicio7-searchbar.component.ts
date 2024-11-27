import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio7-searchbar',
  imports: [FormsModule],
  templateUrl: './ejercicio7-searchbar.component.html',
  styleUrl: './ejercicio7-searchbar.component.css'
})
export class Ejercicio7SearchbarComponent {
  searchTerm: string = ''
}
