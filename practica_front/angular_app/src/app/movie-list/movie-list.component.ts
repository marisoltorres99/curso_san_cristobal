import { Component, OnInit } from '@angular/core';
import { MovieItemComponent } from "../movie-item/movie-item.component";
import { NgFor } from '@angular/common';
import { MovieService } from '../movie.service';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  imports: [MovieItemComponent, NgFor],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent implements OnInit{
  movies: Movie[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movies = this.movieService.getMovies();
  }
  
  selectedMovie: string = '';

  onMovieSelected(movieTitle: string){
    this.selectedMovie = movieTitle;
  }
}
