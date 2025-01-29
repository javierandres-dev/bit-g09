'use strict';
/* DOM | Document Object Model */
// Manipulación del DOM
// Obtener, Cambiar, Agregar, Eliminar
/* const elementoBody = document.querySelector('body');
console.log(elementoBody);
const elementoRaiz = document.getElementById('raiz');
console.log(elementoRaiz);
elementoRaiz.textContent = 'Hola, soy el texto de contenido.';
elementoRaiz.className = 'texto-azul';
elementoBody.innerHTML = `<p>Hola, soy un párrafo.</p>`; */

/*
Manipulación del DOM
Eventos
Reactividad
*/
const elementoImagen = document.querySelector('img');
const elementoBotonEncender = document.getElementById('btnOn');
const elementoBotonApagar = document.getElementById('btnOff');
const elementoTxtOn = document.getElementById('txtOn');
const elementoTxtOff = document.getElementById('txtOff');

let contadorEncendido = 0;
let contadorapagado = 0;

elementoBotonEncender.addEventListener('click', encender);
elementoBotonApagar.addEventListener('click', apagar);

function encender() {
  elementoImagen.setAttribute('src', 'img/bulb-on.png');
  contadorEncendido = contadorEncendido + 1;
  elementoTxtOn.textContent = contadorEncendido;
}

function apagar() {
  elementoImagen.setAttribute('src', 'img/bulb-off.png');
  contadorapagado = contadorapagado + 1;
  elementoTxtOff.textContent = contadorapagado;
}
