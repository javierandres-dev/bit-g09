import { Routes } from '@angular/router';
import { DetalleDeProductoComponent } from './components/pages/detalle-de-producto/detalle-de-producto.component';
import { HomeComponent } from './components/pages/home/home.component';
import { PageNotFoundComponent } from './components/pages/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/pages/products/products.component';

export const routes: Routes = [
  { path: 'inicio', title: 'SPA | Inicio', component: HomeComponent },
  { path: 'productos', title: 'SPA | Productos', component: ProductsComponent },
  {
    path: 'productos/detalle-de-producto/:id',
    title: 'SPA | Productos',
    component: DetalleDeProductoComponent,
  },
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  {
    path: '**',
    title: 'Página No Encontrada',
    component: PageNotFoundComponent,
  },
];
