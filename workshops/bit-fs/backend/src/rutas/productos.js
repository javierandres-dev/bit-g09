import express from 'express';

const ruta = express.Router();

// CRUD
ruta.post('/', (solicitud, respuesta) => {
  respuesta.send('crear...funciona!');
});
ruta.get('/', (solicitud, respuesta) => {
  respuesta.send('leerTodos...funciona!');
});
ruta.get('/:id', (solicitud, respuesta) => {
  respuesta.send('leerUno...funciona!');
});
ruta.put('/:id', (solicitud, respuesta) => {
  respuesta.send('actualizar...funciona!');
});
ruta.delete('/:id', (solicitud, respuesta) => {
  respuesta.send('eliminar...funciona!');
});

export default ruta;
