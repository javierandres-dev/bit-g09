import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interfaces/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  constructor() {}

  httpClient = inject(HttpClient);

  createProduct(product: Product) {
    return this.httpClient.post('http://localhost:4100/productos', product);
  }

  getAllProducts() {
    return this.httpClient.get('http://localhost:4100/productos');
  }

  getOneProduct(id: string) {
    return this.httpClient.get(`http://localhost:4100/productos/${id}`);
  }

  deleteOneProduct(id: string) {
    return this.httpClient.delete(`http://localhost:4100/productos/${id}`);
  }
}
