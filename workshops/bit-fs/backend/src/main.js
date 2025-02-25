import servidor from './servidor.js';

const puerto = 4100;

servidor.listen(puerto);
console.log('Servidor escuchando por el puerto: ' + puerto);
