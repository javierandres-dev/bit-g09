import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { PadreComponent } from '../padre/padre.component';
import { Credentials } from '../../interfaces/credentials';
import {
  CurrencyPipe,
  DatePipe,
  DecimalPipe,
  LowerCasePipe,
  TitleCasePipe,
  UpperCasePipe,
} from '@angular/common';

@Component({
  selector: 'app-foundations',
  imports: [
    PadreComponent,
    FormsModule,
    ReactiveFormsModule,
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
  ],
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
  frameworkFavorito: string = '';
  formLogin = new FormGroup({
    usuario: new FormControl(''),
    contrasenia: new FormControl(''),
  });
  credenciales: Credentials | null = null;
  nombreA: string = 'pepita pérez';
  nombreB: string = 'Pérez Pepita';
  nombreC: string = 'PEPITA PÉREZ';
  cantidad: number = 999.1234;
  fecha = new Date(2025, 1, 20);
  precio: number = 5500.34;

  manejarClick() {
    console.log('Hiciste click');
  }

  manejarMouseover() {
    this.colorFondo = 'cf-amarillo';
  }

  manejarMouseleave() {
    this.colorFondo = 'cf-naranja';
  }

  mostrarFrameworkFavorito() {
    console.log(this.frameworkFavorito);
  }

  manejarLogin() {
    const usuario = this.formLogin.value.usuario;
    const contrasenia = this.formLogin.value.contrasenia;
    if (typeof usuario === 'string' && typeof contrasenia === 'string') {
      this.credenciales = {
        nombreUsuario: usuario,
        contrasenia: contrasenia,
      };
      console.log('credenciales:', this.credenciales);
    }
  }
}
