import ProductosModel from '../modelos/productos.js';

class ProductosController {
  constructor() {}

  async crear(solicitud, respuesta) {
    try {
      const resultado = await ProductosModel.create(solicitud.body);
      respuesta.json({ mensaje: 'se creó un nuevo producto', data: resultado });
    } catch (error) {
      respuesta.json({
        mensaje: 'ocurrió un error al crear producto',
        data: error,
      });
    }
  }

  async leerTodos(solicitud, respuesta) {
    try {
      const resultado = await ProductosModel.getAll();
      const arreglo = [];
      for (const producto of resultado) {
        const { _id, titulo, imagen } = producto;
        arreglo.push({ id: _id, titulo, imagen });
      }
      respuesta.json({
        mensaje: 'se obtuvieron todos los productos',
        data: arreglo,
      });
    } catch (error) {
      respuesta.json({
        mensaje: 'ocurrió un error al obtener todos los pructos',
        data: error,
      });
    }
  }

  async leerUno(solicitud, respuesta) {
    try {
      const resultado = await ProductosModel.getOne(solicitud.params.id);
      respuesta.json({ mensaje: 'se obtuvo el producto', data: resultado });
    } catch (error) {
      respuesta.json({
        mensaje: 'no se encontró el producto con el id: ' + solicitud.params.id,
        data: error,
      });
    }
  }

  async actualizar(solicitud, respuesta) {
    try {
      console.log('id:', solicitud.params.id);
      console.log('body:', solicitud.body);
      const resultado = await ProductosModel.update(
        solicitud.params.id,
        solicitud.body
      );
      respuesta.json({ mensaje: 'producto actualizado', data: resultado });
    } catch (error) {
      respuesta.json({
        mensaje: 'ocurrió un error al actualizar el producto',
        data: error,
      });
    }
  }

  async eliminar(solicitud, respuesta) {
    try {
      const resultado = await ProductosModel.delete(solicitud.params.id);
      respuesta.json({ mensaje: 'producto eliminado', data: resultado });
    } catch (error) {
      respuesta.json({
        mensaje: 'ocurrió un error al eliminar un producto',
        data: error,
      });
    }
  }
}
export default new ProductosController();
