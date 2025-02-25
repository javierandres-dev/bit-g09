import express from 'express';
import morgan from 'morgan';
import rutasProductos from './rutas/productos.js';

const servidor = express();

servidor.use(morgan('dev'));
servidor.use('/productos', rutasProductos);

servidor.get('/', (solicitud, respuesta) => {
  respuesta.send('raíz funciona!');
});

export default servidor;
