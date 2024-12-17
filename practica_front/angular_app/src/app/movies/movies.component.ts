import { Component } from '@angular/core';
import { MovieItemComponent } from "../movie-item/movie-item.component";

@Component({
  selector: 'app-movies',
  imports: [MovieItemComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

}
