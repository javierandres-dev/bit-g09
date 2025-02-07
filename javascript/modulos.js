'use strict';
import { suma, resta, multiplica, divide } from './modulo.js';

function operacionesBasicas(n1, n2) {
  return `
  ${n1} + ${n2} = ${suma(n1, n2)}
  ${n1} - ${n2} = ${resta(n1, n2)}
  ${n1} x ${n2} = ${multiplica(n1, n2)}
  ${n1} / ${n2} = ${divide(n1, n2)}
  `;
}

console.log(operacionesBasicas(10, 5));
