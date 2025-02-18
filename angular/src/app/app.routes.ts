import { Routes } from '@angular/router';
import { FoundationsComponent } from './components/foundations/foundations.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { PokeapiComponent } from './components/pokeapi/pokeapi.component';

export const routes: Routes = [
  {
    path: 'fundamentos',
    component: FoundationsComponent,
    title: 'Fundamentos',
  },
  { path: 'inicio', component: HomeComponent, title: 'Inicio' },
  { path: 'pokeapi', component: PokeapiComponent, title: 'PokéApi' },
  { path: '', redirectTo: 'inicio', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent, title: 'Error 404' },
];
