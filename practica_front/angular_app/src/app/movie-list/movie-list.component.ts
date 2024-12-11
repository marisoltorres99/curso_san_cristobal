import { Component } from '@angular/core';
import { MovieItemComponent } from "../movie-item/movie-item.component";
import { NgFor } from '@angular/common';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-list',
  imports: [MovieItemComponent, NgFor],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }
  
  selectedMovie: string = '';

  onMovieSelected(movieTitle: string){
    this.selectedMovie = movieTitle;
  }
}
