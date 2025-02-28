import { Routes } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { ProductsComponent } from './components/pages/products/products.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'inicio', title: 'SPA | Inicio', component: HomeComponent },
  { path: 'productos', title: 'SPA | Productos', component: ProductsComponent },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  {
    path: '**',
    title: 'Página No Encontrada',
    component: PageNotFoundComponent,
  },
];
