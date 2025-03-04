import { Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ServicesComponent } from './components/services/services.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
  { path: 'about-us', title: 'About Us | SPA', component: AboutUsComponent },
  { path: 'contact', title: 'Contact | SPA', component: ContactComponent },
  { path: 'home', title: 'Home | SPA', component: HomeComponent },
  { path: 'products', title: 'Products | SPA', component: ProductsComponent },
  { path: 'services', title: 'Services | SPA', component: ServicesComponent },
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', title: 'Error 404 | SPA', component: PageNotFoundComponent },
];
