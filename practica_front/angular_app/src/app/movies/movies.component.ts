import { Component } from '@angular/core';
import { MovieItemComponent } from "../movie-item/movie-item.component";
import { MovieListComponent } from "../movie-list/movie-list.component";

@Component({
  selector: 'app-movies',
  imports: [MovieListComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.css'
})
export class MoviesComponent {

}
