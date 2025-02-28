import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  httpClient = inject(HttpClient);

  getAllProducts() {
    return this.httpClient.get('http://localhost:4100/productos');
  }
}
