'use strict';
/* DOM | Document Object Model */
// Manipulación del DOM
// Obtener, Cambiar, Agregar, Eliminar
const elementoBody = document.querySelector('body');
console.log(elementoBody);
const elementoRaiz = document.getElementById('raiz');
console.log(elementoRaiz);

elementoRaiz.textContent = 'Hola, soy el texto de contenido.';

elementoRaiz.className = 'texto-azul';

elementoBody.innerHTML = `<p>Hola, soy un párrafo.</p>`;
