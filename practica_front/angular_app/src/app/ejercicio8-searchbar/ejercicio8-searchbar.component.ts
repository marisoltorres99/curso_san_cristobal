import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejercicio8-searchbar',
  imports: [FormsModule],
  templateUrl: './ejercicio8-searchbar.component.html',
  styleUrl: './ejercicio8-searchbar.component.css'
})
export class Ejercicio8SearchbarComponent {
  searchTerm: string = ''
}
