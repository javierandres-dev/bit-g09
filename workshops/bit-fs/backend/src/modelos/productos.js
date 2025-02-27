import mongoose from 'mongoose';
import ProductoSchema from '../schemas/productos.js';

class ProductosModel {
  async crear(producto) {
    return await ProductoSchema.create(producto);
  }
}

export default new ProductosModel();
