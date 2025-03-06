import { Component, OnInit, inject } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';

@Component({
  selector: 'app-detalle-de-producto',
  imports: [ReactiveFormsModule],
  templateUrl: './detalle-de-producto.component.html',
  styleUrl: './detalle-de-producto.component.css',
})
export class DetalleDeProductoComponent implements OnInit {
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);
  productsService = inject(ProductsService);

  productoId!: string | null;
  titulo!: string | null;
  precio!: number | null;
  imagen!: string | null;
  estaListo: boolean = false;
  esActualizar = false;

  actualizarForm!: FormGroup;

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

            this.actualizarForm = new FormGroup({
              titulo: new FormControl(this.titulo),
              imagen: new FormControl(this.imagen),
              precio: new FormControl(this.precio),
            });

            this.estaListo = true;
          });
      }
    });
  }

  quiereActualizar() {
    this.esActualizar = true;
  }

  actualizarProducto() {
    const title = this.actualizarForm.get('titulo')?.value;
    const price = this.actualizarForm.get('precio')?.value;
    const image = this.actualizarForm.get('imagen')?.value;
    if (
      title === this.titulo &&
      price === this.precio &&
      image === this.imagen
    ) {
      alert('el producto no tiene actualizaciones por guardar');
      return;
    }
    if (this.productoId) {
      this.productsService
        .updateProduct(this.productoId, this.actualizarForm.value)
        .subscribe((respuesta: any) => {
          if (respuesta.mensaje === 'producto actualizado') {
            this.router.navigateByUrl('/productos');
          }
        });
    }
  }

  eliminar() {
    if (this.productoId) {
      this.productsService
        .deleteOneProduct(this.productoId)
        .subscribe((respuesta: any) => {
          if (respuesta.mensaje === 'producto eliminado') {
            this.router.navigateByUrl('/productos');
          }
        });
    }
  }
}
