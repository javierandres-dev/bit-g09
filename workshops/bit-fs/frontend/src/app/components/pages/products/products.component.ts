import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { ProductsService } from '../../../services/products.service';
import { Product } from '../../../interfaces/products';

@Component({
  selector: 'app-products',
  imports: [FormsModule, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent implements OnInit {
  productsService = inject(ProductsService);

  esCrear: boolean = false;
  titulo: string = '';
  precio: number = 0;
  imagen: string = '';
  productos: any[] = [];

  ngOnInit() {
    this.obtenerTodosLosProductos();
  }

  quiereCrear() {
    this.esCrear = true;
  }

  nuevoProducto() {
    console.log('titulo:', this.titulo);
    console.log('precio:', this.precio);
    console.log('imagen:', this.imagen);
    const producto: Product = {
      titulo: this.titulo,
      precio: this.precio,
      imagen: this.imagen,
    };
    this.productsService.createProduct(producto).subscribe((respuesta: any) => {
      //console.log('respuesta:', respuesta);
      this.esCrear = false;
      this.obtenerTodosLosProductos();
    });
  }

  obtenerTodosLosProductos() {
    this.productsService.getAllProducts().subscribe((respuesta: any) => {
      // console.log('respuesta:', respuesta);
      this.productos = respuesta.data;
    });
  }
}
