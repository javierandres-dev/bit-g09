import { Routes } from '@angular/router';
import { FoundationsComponent } from './components/foundations/foundations.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
  { path: 'fundamentos', component: FoundationsComponent },
  { path: 'inicio', component: HomeComponent },
];
