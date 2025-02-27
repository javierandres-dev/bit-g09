import ProductosModel from '../modelos/productos.js';

class ProductosController {
  constructor() {}

  async crear(solicitud, respuesta) {
    try {
      console.log('body:', solicitud.body);
      const resultado = await ProductosModel.crear(solicitud.body);
      respuesta.json({ mensaje: 'se creó un nuevo producto', data: resultado });
    } catch (error) {
      respuesta.json({
        mensaje: 'ocurrió un error al crear producto',
        data: error,
      });
    }
  }

  async leerTodos(solicitud, respuesta) {
    respuesta.json({ mensaje: 'leerTodos...funciona!', data: null });
  }

  async leerUno(solicitud, respuesta) {
    respuesta.json({ mensaje: 'leerUno...funciona!', data: null });
  }

  async actualizar(solicitud, respuesta) {
    respuesta.json({ mensaje: 'actualizar...funciona!', data: null });
  }

  async eliminar(solicitud, respuesta) {
    respuesta.json({ mensaje: 'eliminar...funciona!', data: null });
  }
}
export default new ProductosController();
