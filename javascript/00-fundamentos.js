'use strict';
// Esto es un comentario de JavaScript de una sola línea

/*
Esto es un comentario
de JavaScript
en varias líneas
*/

// en la siguiente línea estoy imprimiento un valor en consola
//console.log('hola, a todos!');

/* VARIABLES */
// Declaración
var nombre1;
let nombre1a;

// declaración e inicialización
var nombre2 = 'pepita';
let nombre2a = 'pepito';

// variable de tipo constante
const miConstante = 1;
//console.log(miConstante);

// automática
// miVariableAutomatica;

let miVariable = 'hola';
//console.log(miVariable);
miVariable = 'hello';
//console.log(miVariable);

/* TIPOS DE DATO PRIMITIVOS */
miVariable = 'Hola, otra vez!';
miVariable = "I'm";
miVariable = 'Él dijo: "Hola"';
miVariable = `Ella dijo: ${nombre2}`;
miVariable = 'Él pensó en: ' + nombre2;
miVariable = '1';
miVariable = 'true';
miVariable = '';

// escape de caracteres (string)
miVariable = 'c:\\windows';
miVariable = 'primera línea de texto\nsegunda línea de texto';
miVariable = 'Precio:\t$9.99';
//console.log(miVariable);

miVariable = 0;
miVariable = 10;
miVariable = 9.5;
miVariable = 0xff;
miVariable = 123e5;
miVariable = -10;
miVariable = NaN;

miVariable = true;
miVariable = false;

miVariable = undefined;
//console.log(miVariable);

/* FUNCIONES */
// función regular
function miFuncion() {
  console.log('Pepita Pérez');
}

//miFuncion();

function miFuncion1(nombre) {
  console.log(nombre);
}

//miFuncion1('Pepita Pérez');
//miFuncion1('Pepito Pérez');

function miFuncion2(apellido = 'Pérez') {
  console.log(apellido);
}

//miFuncion2('Álvarez');
//miFuncion2();

function miFuncion3() {
  return 'cadena de texto';
}

let valorRetornado = miFuncion3();
//console.log(valorRetornado);

// funcion expresada
/* const miFnExpresada = function () {
  console.log('Hola, soy una función expresada');
};
miFnExpresada(); */

// función flecha
/* const miFnFlecha = () => {
  console.log('Hola, soy una función flecha');
};
miFnFlecha(); */

// IIFE | Inmediately Invoked Function Expression
/* (function () {
  console.log('Hola, soy IIFE 1');
})();

(() => {
  console.log('Hola, soy IIFE 2');
})(); */

/* HOISTING */
/* miFnRegular();
function miFnRegular() {
  console.log('Hola, soy función regular');
}

const miFnExpresada = () => {
  console.log('Hola, soy función expresada y flecha');
};
miFnExpresada(); */

/* THIS */
/* console.log(this);
const x = this;
console.log(this);
function miFuncion() {
  return this;
}
valorRetornado = miFuncion();
console.log(valorRetornado); */

/* OPERADORES */
// aritméticos
//console.log(8 + 4);
//console.log(8 - 4);
//console.log(8 * 4);
//console.log(8 / 4);
//console.log(8 % 4);
//console.log(10 % 3);
//console.log(2 ** 3);
// ++
// --

// Precedencia de operadores PEMDAS
// Paréntesis Exponentes Multiplicación División Adición Sustracción

const operacion = 12 / 3 + 2 * 3 - 1; // (12 / 3) + (2 * 3) - 1 = 4 + 6 - 1 = 9
//console.log(operacion);

// asignación
miVariable = true;

// concatenación
//console.log('Hola, ' + '¿cómo estás?');
//console.log('8' + '4');
//console.log(8 + '4');
//console.log('8' + 4);

// llamado
//console.log();

// comparasión
//console.log('hola' == 'hola');
//console.log('hola' == 'hello');
//console.log(8 == 8);
//console.log(8 == '8');
//console.log(8 === '8');
//console.log('hola' === 'hola');
//console.log('hola' === 'hello');
//console.log(8 === 8);
//console.log(8 != 4);
//console.log(8 != 8);
//console.log(8 != '8');
//console.log(8 !== '8');
//console.log(8 > 4);
//console.log(8 < 4);
//console.log(8 >= 4);
//console.log(8 <= 4);

// Lógicos
// &&
// ||
// !

/* CONTROL DE FLUJO */
// condicionales
/* if (true) {
  console.log('TRUE - si se cumple la condición');
} */

/* if (false) {
  console.log('TRUE - si se cumple la condición');
} else {
  console.log('FALSE - no se cumple la condición');
} */

/* const valor = 'abc';

switch (valor) {
  case 'a':
    console.log("es 'a'");
    break;
  case 'b':
    console.log("es 'b'");
    break;
  case 'c':
    console.log("es 'c'");
    break;
  default:
    console.log("No es ni 'a' ni 'b' ni 'c'");
    break;
} */

// Ciclos | Loops | Bucles
// contador
/* for (let contador = 0; contador < 3; contador++) {
  console.log(contador);
} */

/* let contador = 0;

while(contador < 3){
  console.log(contador);
  contador++;
} */

// centinela
/* let centinela = true;

while (centinela === true) {
  centinela = false;
  console.log('ejecutando ciclo while con centinela');
} */

/* let contador = 0;

do {
  console.log('ejecutando ciclo do..while');
  contador++;
} while (contador < 3); */

/* TIPOS DE DATO NO PRIMITIVOS */
// arreglos, arrays, vectores, listas, matriz
/* const arreglo = ['abc', 100, true, undefined, null, [], {}];
console.log(arreglo);
console.log(arreglo.length);
console.log(arreglo[0]);
console.log(arreglo[1]);
console.log(arreglo[2]);
for (let i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
} */

// objetos, objetos literales
/* const objeto = {
  llave: 'valor',
  propiedad: 'valor de la propiedad',
  metodo: () => {
    console.log('hola, soy un método');
  },
}; */
