import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class StoreApiService {
  constructor() {}
  httpClient = inject(HttpClient);

  getAllProducts() {
    return this.httpClient.get('https://fakestoreapi.com/products');
  }
}
