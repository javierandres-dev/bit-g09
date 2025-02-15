import { Component } from '@angular/core';
import { PadreComponent } from '../padre/padre.component';

@Component({
  selector: 'app-foundations',
  imports: [PadreComponent],
  templateUrl: './foundations.component.html',
  styleUrl: './foundations.component.css',
})
export class FoundationsComponent {
  nombreUsuario: string = 'Pepita';
  estaLogueado: boolean = false;
  devs: string[] = [
    'Manuela Álvarez',
    'Isaac Diaz',
    'Valentina Restan',
    'Sergio Novoa',
    'Alexandra Restrepo',
    'Javier Sanabria',
    'Juan Aguirre',
    'Luis Muñoz',
    'Brayan Narvaez',
    'Alvaro Bahos',
    'Daniel Cruz',
  ];
  ooss = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' },
  ];
  evitarEnvio: boolean = true;
  urlImagen: string =
    'https://bitinstitute.co/cms/wp-content/uploads/bit-logo.svg';
  colorFondo: string = 'cf-rojo';

  manejarClick() {
    console.log('Hiciste click');
  }

  manejarMouseover() {
    this.colorFondo = 'cf-amarillo';
  }

  manejarMouseleave() {
    this.colorFondo = 'cf-naranja';
  }
}
