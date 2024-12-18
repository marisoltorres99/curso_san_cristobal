import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-series-api',
  imports: [NgFor],
  templateUrl: './series-api.component.html',
  styleUrl: './series-api.component.css'
})
export class SeriesApiComponent implements OnInit{
  series: any[] = [];

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getEpisodes().subscribe(
      (series) => {
        this.series = series.Episodes;
      },
      (error) => {
        console.error('Error al obtener los datos', error);
      }
    );
  }
}
