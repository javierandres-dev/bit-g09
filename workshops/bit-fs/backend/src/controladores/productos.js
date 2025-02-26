class ProductosController {
  constructor() {}

  async crear(solicitud, respuesta) {
    respuesta.json({ mensaje: 'crear...funciona!', data: null });
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
