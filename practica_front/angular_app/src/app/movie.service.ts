import { Injectable } from '@angular/core';
import { Movie } from './models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private movies: Movie[] = [
    { title: 'El viaje de Chihiro', description: 'Una niña queda atrapada en un mundo mágico y debe salvar a sus padres transformados en cerdos.', year: 2001, image: 'images/el_viaje_de_chihiro.jpg' },
    { title: 'Relatos salvajes', description: 'Seis historias cortas que exploran el lado más salvaje y vengativo del ser humano.', year: 2014, image: 'images/relatos_salvajes.jpg' },
    { title: 'El secreto de sus ojos', description: 'Un investigador revive un caso sin resolver mientras enfrenta sus propios sentimientos.', year: 2009, image: 'images/el_secreto_de_sus_ojos.jpg' },
    { title: 'Parasite', description: 'Una familia pobre se infiltra en la vida de una familia rica con consecuencias inesperadas.', year: 2019, image: 'images/parasite.jpg' },
    { title: 'Matrix', description: 'Un programador descubre que la realidad es una simulación y lidera la lucha contra sus creadores.', year: 1999, image: 'images/matrix.jpg' },
    { title: 'Titanic', description: 'Una historia de amor épica entre dos jóvenes a bordo del trágico viaje del Titanic.', year: 1997, image: 'images/titanic.jpg' },
    { title: 'Barbie', description: 'Barbie explora el mundo real y cuestiona su propósito en un viaje de autodescubrimiento.', year: 2023, image: 'images/barbie.jpg' },
    { title: 'Oppenheimer', description: 'La historia del físico J. Robert Oppenheimer y el desarrollo de la bomba atómica.', year: 2023, image: 'images/oppenheimer.jpg' },
    { title: 'Oldboy', description: 'Un hombre busca venganza tras ser encarcelado misteriosamente durante 15 años.', year: 2003, image: 'images/oldboy.jpg' },
    { title: 'Your Name', description: 'Dos jóvenes intercambian cuerpos y crean un vínculo profundo mientras enfrentan el destino.', year: 2016, image: 'images/your_name.jpg' },
  ];

  constructor() { }

  getMovies() {
    return this.movies; 
  }
}
