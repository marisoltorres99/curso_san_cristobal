import { Routes } from '@angular/router';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';
import { MoviesComponent } from './movies/movies.component';

export const routes: Routes = [
    {
        path: 'pelis',
        component: MoviesComponent
    },

    {
        path: 'ejercicios',
        component: EjerciciosComponent
    }
];
