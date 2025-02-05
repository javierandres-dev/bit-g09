'use strict';
const $avisoModal = new bootstrap.Modal(document.getElementById('avisoModal'));
const $no = document.getElementById('no');
const $si = document.getElementById('si');
const $formularioTest = document.getElementById('formularioTest');
const $selector = document.getElementById('0');
const $resultado = document.getElementById('resultado');
const $textoResultado = document.getElementById('textoResultado');
const $btnReiniciar = document.getElementById('btnReiniciar');

document.addEventListener('DOMContentLoaded', () => {
  $avisoModal.show();
  $btnReiniciar.addEventListener('click', () => {
    window.location.reload();
  });
});

function manejarNo() {
  $no.classList.toggle('d-none');
}

function manejarSi() {
  $si.classList.toggle('d-none');
  $avisoModal.hide();
}

$selector.addEventListener('change', activarRadios);

function activarRadios() {
  const $inputRadio = document.querySelectorAll("input[type='radio']");
  $inputRadio.forEach((nodo) => {
    nodo.removeAttribute('disabled');
    nodo.addEventListener('change', () => {
      manejarCheckbox(nodo.id);
    });
  });
}

function manejarCheckbox(id) {
  const $inputCheckbox = document.querySelectorAll("input[type='checkbox']");
  if (id === '1') {
    for (const nodo of $inputCheckbox) {
      nodo.removeAttribute('disabled');
    }
  } else {
    for (const nodo of $inputCheckbox) {
      nodo.checked = false;
      nodo.setAttribute('disabled', true);
    }
  }
}

$formularioTest.addEventListener('submit', (evento) => {
  evento.preventDefault();
  const textHetero =
    'persona que sientre atracción por otra persona del sexo opuesto';
  const textoHomo =
    'persona que sientre atracción por otra persona de su mismo sexo';
  const textoBi =
    'Persona que tiene atracción por otras personas tanto de su mismo sexo como del opuesto';
  const datosFinales = {};
  const datosFormulario = new FormData($formularioTest);
  let atraccion = '';
  let identidadGenero = '';
  let identidadDetalles = '';
  let mensajeFinal = null;

  for (const [llave, valor] of datosFormulario) {
    datosFinales[llave] =
      valor === 'true' ? true : valor === 'false' ? false : valor;
  }

  mensajeFinal = `Usted es ${datosFinales.sexoBiologico}, `;

  if (datosFinales.esAsexual) {
    identidadGenero = 'asexual.';
    identidadDetalles = '(persona que no tiene atracción por otra persona).';
  } else {
    if (datosFinales.leGustaMujer) atraccion = 'mujer';
    if (datosFinales.leGustaHombre)
      atraccion += atraccion ? ' y hombre' : 'hombre';
    mensajeFinal += `que tiene atracción por ${atraccion}, `;
    if (datosFinales.sexoBiologico === 'mujer') {
      if (datosFinales.leGustaMujer && datosFinales.leGustaHombre) {
        identidadGenero = 'bisexual.';
        identidadDetalles = `(${textoBi}).`;
      } else if (datosFinales.leGustaMujer) {
        identidadGenero = 'lesbiana.';
        identidadDetalles = `  Homosexual (${textoHomo}).`;
      } else {
        identidadGenero = 'heterosexual.';
        identidadDetalles = `(${textHetero}).`;
      }
    }
    if (datosFinales.sexoBiologico === 'hombre') {
      if (datosFinales.leGustaMujer && datosFinales.leGustaHombre) {
        identidadGenero = 'bisexual.';
        identidadDetalles = `(${textoBi}).`;
      } else if (datosFinales.leGustaHombre) {
        identidadGenero = 'gay.';
        identidadDetalles = `  Homosexual (${textoHomo})`;
      } else {
        identidadGenero = 'heterosexual.';
        identidadDetalles = `(${textHetero}).`;
      }
    }
  }
  mensajeFinal += `su identidad de genero es ${identidadGenero} ${identidadDetalles}`;
  $si.classList.toggle('d-none');
  $resultado.classList.toggle('d-none');
  $textoResultado.textContent = mensajeFinal;
});
