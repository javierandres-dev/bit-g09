import { Component, inject, OnInit } from '@angular/core';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../interfaces/products';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productsService = inject(ProductsService);

  productos: any = null;

  ngOnInit() {
    this.obtenerTodosLosProductos();
  }

  obtenerTodosLosProductos() {
    this.productsService.getAllProducts().subscribe((respuesta: any) => {
      console.log('respuesta:', respuesta);
      this.productos = respuesta.data;
    });
  }
}
