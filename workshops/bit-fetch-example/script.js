'use strict';
const apiUrl = 'https://random-d.uk/api/v2/random';
const $img = document.querySelector('img');
const $figcaption = document.querySelector('figcaption');
const $button = document.querySelector('button');

document.addEventListener('DOMContentLoaded', obtenerPrimerPato);

$button.addEventListener('click', obtenerOtroPato);

function obtenerPrimerPato() {
  fetch(apiUrl)
    .then((respuesta) => {
      // console.log('respuesta:', respuesta);
      return respuesta.json();
    })
    .then((datos) => {
      // console.log('datos:', datos);
      $img.setAttribute('src', datos.url);
      $figcaption.textContent = datos.message;
    })
    .catch((error) => {
      console.log('error:', error);
    });
}

async function obtenerOtroPato() {
  try {
    let respuesta = await fetch(apiUrl);
    respuesta = await respuesta.json();
    // console.log('respuesta:', respuesta);
    $img.src = respuesta.url;
    $figcaption.textContent = respuesta.message;
  } catch (error) {
    console.log('error:', error);
  }
}
