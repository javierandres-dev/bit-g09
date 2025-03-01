import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import rutasProductos from './rutas/productos.js';

const servidor = express();

servidor.use(morgan('dev'));
servidor.use(cors());
servidor.use(express.json());
servidor.use(express.urlencoded({ extended: false }));
servidor.use('/productos', rutasProductos);

servidor.get('/', (solicitud, respuesta) => {
  respuesta.json({ mensaje: 'raíz ok', data: null });
});

export default servidor;
