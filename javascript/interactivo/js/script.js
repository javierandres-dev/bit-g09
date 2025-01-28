'use strict';
/* INTERACCIÓN */

/* Entrada | Inputs */
// const dato = prompt();
// const nombreUsuario = prompt('Por favor, ingrese su nombre:');
// console.log(nombreUsuario);

/* Salida | Output */
// console.log('¡Funciona!');
// document.write('¡Funciona!');
// alert('¡Funciona!');

/* VARIABLES */
// automática
/* nombreUsuario = 'Pepita';
console.log(nombreUsuario); */

// var
/* var apellidoUsuario = 'Pérez';
console.log(apellidoUsuario); */

// let
/* let edadUsuario = 20;
console.log(edadUsuario); */

// const
/* const contrasenia = 123;
console.log(contrasenia); */

/* BLOQUES y ÁMBITO DE LAS VARIABLES | SCOPE */
/* const numeroGlobal = 10;
console.log(numeroGlobal); */

/* var textoGlobal = 'HOLA';
console.log(textoGlobal); */

/* let variableGlobal = 'hola soy LET GLOBAL';
console.log(variableGlobal); */

/* {
  const numeroLocal = 11;
  console.log(numeroLocal);

  let texto1Local = 'texto 1 con LET LOCAL';
  console.log(texto1Local);

  console.log(numeroGlobal);
  console.log(textoGlobal);
  console.log(variableGlobal);

  var texto2Local = 'texto 2 con VAR LOCAL';
  console.log(texto2Local);
}

console.log(texto2Local);
console.log(texto1Local); */

/* TIPOS DE DATO PRIMITIVOS */
/* const nombre = prompt('Escriba su nombre:');
console.log(nombre); */

/* OPERADOR typeof */
/* const nombre = 'Pepita';
const edad = 20;
const autorizado = true;
const miVariable = undefined;

console.log(typeof nombre);
console.log(typeof edad);
console.log(typeof autorizado);
console.log(typeof miVariable);

const valor = null;
console.log(typeof valor); */

/* CONVERSIÓN DE TIPOS */
/* const valorIngresado = prompt('Por favor ingresa algo:');
console.log(valorIngresado);
console.log(typeof valorIngresado); */

/* const num1 = '4';
const num2 = '3';
const resultado = num1 + num2;
console.log(resultado); */

/* let convertido = Number('4');
convertido = +'5';
convertido = parseInt('3');
convertido = parseFloat('2.5');
console.log(convertido);
console.log(typeof convertido); */

/* let convertido = Boolean('true');
console.log(convertido);
console.log(typeof convertido); */

/* EXPRESIONES BOOLEANAS */
// Truthy
/* console.log(true);
console.log(1);
console.log(-1);
console.log('a');
console.log('a...'); */

// Falsy
/* console.log(false);
console.log(0);
console.log('');
console.log(undefined);
console.log(null); */

/* CONDICIONALES */

/* const valor = null;

if (valor) {
  console.log('El valor el TRUTHY');
} else {
  console.log('El valor el FALSY');
} */

/* const valor = '100';

switch (valor) {
  case 100:
    console.log("es 'a'");
    break;
  case 200:
    console.log("es 'b'");
    break;
  case 300:
    console.log("es 'c'");
    break;
  default:
    console.log("No es ni 'a' ni 'b' ni 'c'");
    break;
} */

/* CICLOS */

/* for (let contador = 0; contador < 3; contador++) {
  console.log(contador);
} */

/* let contador = 0;

while (contador < 3) {
  console.log(contador);
  contador++;
} */

/* let respuesta = '';

while (respuesta != 'no') {
  respuesta = prompt('¿Quiere continuar?');
  console.log('ejecutando ciclo while con centinela');
} */

/* let contador = 0;

do {
  console.log('ejecutando ciclo do..while');
  contador++;
} while (contador < 3); */

/* OPERADORES */
// Lógicos
/* const num1 = -1;
const num2 = -2;

if (num1 > 0 && num2 > 0) {
  console.log('&& los dos valores son TRUE.');
}

if (num1 > 0 || num2 > 0) {
  console.log('|| al menos uno de los dos valores es TRUE.');
}

const verdadero = false;
if (!verdadero) {
  console.log('es FALSE');
} */

/* TIPOS DE DATO NO PRIMITIVOS */
// arreglos, arrays, vectores, listas, matriz
/* let estudiantes = [];
estudiantes = ['Alexandra', 'Manuela', 'Valentina'];
console.log(estudiantes[2]);
estudiantes[1] = 'Manuela Álvarez';
console.log(estudiantes.length);
console.log(estudiantes);
console.log(estudiantes[0]);
console.log(estudiantes[1]);
console.log(estudiantes[2]);
for (let i = 0; i < estudiantes.length; i++) {
  console.log(estudiantes[i]);
} */

// objetos, objetos literales
/* const estudiante = {
  edad: 13,
  nombre: 'Fulanito',
  apellido: 'De Tal',
  curso: 8,
  graduado: false,
  saludar: () => {
    console.log('Hola, soy Fulanito!');
    return 'este es el valor retornado';
  },
};
console.log(estudiante);
console.log(estudiante.nombre);
console.log(estudiante['apellido']);
console.log(estudiante.saludar());
estudiante.saludar();
estudiante.generoBiologico = 'Masculino'; */
