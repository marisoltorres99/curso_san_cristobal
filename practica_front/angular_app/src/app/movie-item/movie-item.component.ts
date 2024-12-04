import { NgIf } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../models/movie.model';

@Component({
  selector: 'app-movie-item',
  imports: [NgIf],
  templateUrl: './movie-item.component.html',
  styleUrl: './movie-item.component.css'
})
export class MovieItemComponent {
  @Input() movie: Movie = { title: '', description: '', year: 0, image: '' };
  @Output() movieSelected = new EventEmitter<string>();

  selectMovie() {
    this.movieSelected.emit(this.movie.title);
  }
}
