'use strict';
/* String */
let miString = '    javascript    ';
miString = miString.trim();
miString = '    javascript    ';
miString = miString.trimStart();
miString = miString.trimEnd();
// console.log(miString.length);
miString = 'JavaScript';
miString = miString.toLowerCase();
miString = miString.toUpperCase();
miString = 'JavaScript';
miString = miString.replace('Java', 'Type');
miString = miString.split('');
miString = 'JavaScript';
miString = miString.slice(4);
miString = 'JavaScript';
miString = miString.slice(0, 4);
miString = 'JavaScript';
miString = miString.slice(-1);
miString = 'JavaScript';
//console.log(miString[4]);
/* for (let i = 0; i < miString.length; i++) {
  console.log(miString[i]);
} */
/* const contrasenia1 = '123ABC';
const contrasenia2 = '123ABC';
const contrasenia3 = '123aBC';
console.log(miString);
console.log(contrasenia1);
console.log(contrasenia2);
console.log(contrasenia3);
let sonIguales1 = contrasenia1.match(contrasenia2);
let sonIguales2 = contrasenia1.match(contrasenia3);
console.log(sonIguales1);
console.log(sonIguales2);
sonIguales1 = contrasenia1.localeCompare(contrasenia2);
sonIguales2 = contrasenia1.localeCompare(contrasenia3);
console.log(sonIguales1);
console.log(sonIguales2); */
miString = null;
const str1 = 'Java';
const str2 = 'Script';
const str3 = 'es genial!';
// miString = str1 + str2;
miString = str1.concat(str2, ' ', str3);
let resultado = miString.includes('es');
resultado = miString.startsWith('J');
resultado = miString.endsWith('!');
resultado = miString.indexOf('es');
//miString = miString.substring(14);
miString = miString.substring(14, 20);
/* console.log('miString:', miString);
console.log('resultado:', resultado); */
