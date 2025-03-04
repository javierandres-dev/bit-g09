import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-detalle-de-producto',
  imports: [],
  templateUrl: './detalle-de-producto.component.html',
  styleUrl: './detalle-de-producto.component.css',
})
export class DetalleDeProductoComponent implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);

  productoId!: string | null;
  titulo!: string | null;
  precio!: number | null;
  imagen!: string | null;
  estaListo: boolean = false;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      this.productoId = parametros.get('id');
      if (this.productoId) {
        this.productsService
          .getOneProduct(this.productoId)
          .subscribe((respuesta: any) => {
            this.titulo = respuesta.data.titulo;
            this.imagen = respuesta.data.imagen;
            this.precio = respuesta.data.precio;
            this.estaListo = true;
          });
      }
    });
  }
}
