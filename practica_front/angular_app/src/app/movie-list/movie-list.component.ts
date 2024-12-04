import { Component } from '@angular/core';
import { MovieItemComponent } from "../movie-item/movie-item.component";
import { NgFor } from '@angular/common';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-list',
  imports: [MovieItemComponent, NgFor],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.css'
})
export class MovieListComponent {
  movies: Movie[] = [
    { title: 'El viaje de Chihiro', description: 'Descripcion 1', year: 2001, image: 'https://pics.filmaffinity.com/El_viaje_de_Chihiro-405533198-large.jpg' },
    { title: 'Relatos salvajes', description: 'Descripcion 2', year: 2014, image: 'https://pics.filmaffinity.com/Relatos_salvajes-102488639-large.jpg' },
    { title: 'El secreto de sus ojos', description: 'Descripcion 3', year: 2009, image: 'https://pics.filmaffinity.com/El_secreto_de_sus_ojos-483213496-large.jpg' },
    { title: 'Parasite', description: 'Descripcion 4', year: 2019, image: 'https://pics.filmaffinity.com/Paraasitos-406070218-large.jpg' },
    { title: 'Matrix', description: 'Descripcion 5', year: 1999, image: 'https://pics.filmaffinity.com/Matrix-155050517-large.jpg' },
    { title: 'Titanic', description: 'Descripcion 6', year: 1997, image: 'https://pics.filmaffinity.com/Titanic-321994924-large.jpg' },
    { title: 'Barbie', description: 'Descripcion 7', year: 2023, image: 'https://pics.filmaffinity.com/Barbie-295661697-mmed.jpg' },
    { title: 'Oppenheimer', description: 'Descripcion 8', year: 2023, image: 'https://pics.filmaffinity.com/Oppenheimer-828933592-large.jpg' },
    { title: 'Oldboy', description: 'Descripcion 9', year: 2003, image: 'https://pics.filmaffinity.com/Old_Boy-410950704-large.jpg' },
    { title: 'Your Name', description: 'Descripcion 10', year: 2016, image: 'https://pics.filmaffinity.com/Your_Name-753183494-large.jpg' },
  ];
  
  selectedMovie: string = '';

  onMovieSelected(movieTitle: string){
    this.selectedMovie = movieTitle;
  }
}
