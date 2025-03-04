import mongoose from 'mongoose';
import ProductoSchema from '../schemas/productos.js';

class ProductosModel {
  async create(producto) {
    return await ProductoSchema.create(producto);
  }

  async getAll() {
    return await ProductoSchema.find();
  }

  async getOne(id) {
    return await ProductoSchema.findById(id);
  }

  async update(id, producto) {
    return await ProductoSchema.findOneAndUpdate(
      { _id: new mongoose.Types.ObjectId(id) },
      producto
    );
  }

  async delete(id) {
    return await ProductoSchema.findOneAndDelete({
      _id: new mongoose.Types.ObjectId(id),
    });
  }
}

export default new ProductosModel();
