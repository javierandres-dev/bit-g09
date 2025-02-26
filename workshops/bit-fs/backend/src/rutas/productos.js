import express from 'express';
import ProductosController from '../controladores/productos.js';

const ruta = express.Router();

// CRUD
ruta.post('/', ProductosController.crear);
ruta.get('/', ProductosController.leerTodos);
ruta.get('/:id', ProductosController.leerUno);
ruta.put('/:id', ProductosController.actualizar);
ruta.delete('/:id', ProductosController.eliminar);

export default ruta;
