/* TIPOS, TIPADO, TYPES */
// implicito o inferencia de tipo
/* let nombre = 'pepita';
nombre  = true;
console.log(nombre); */

// explicito
/* let nombre: string = 'pepita';
nombre = 'pepito';
nombre = 0;
console.log(nombre); */

/* TIPOS DE DATOS */
// primitivos o simples
/* let miString: string = 'abc';
let MiNumber: number = 0;
let miBoolean: boolean = true;
console.log(miString);
console.log(MiNumber);
console.log(miBoolean);
miString = 'xyz';
MiNumber = 1;
miBoolean = false;
console.log(miString);
console.log(MiNumber);
console.log(miBoolean); */

// union de tipos
/* let miUnion: string | number;
miUnion = 10;
console.log(miUnion);
miUnion = 'abc';
console.log(miUnion); */

// especiales
/* let miNull: null = null;
console.log(miNull);
let miUndefined: undefined;
console.log(miUndefined);
let miUnknown: unknown;
miUnknown = 'abc';
miUnknown = 0;
miUnknown = true;
console.log(miUnknown);
let miAny: any;
miAny = 'xyz';
miAny = 1;
miAny = false;
console.log(miAny); */

// arreglos
/* let arr1 = ['b', 0, false, [], {}, () => {}];
arr1 = ['a', 'e', 'i', 'o', 'u'];
arr1 = [1, 2, 3, 4, 5];
console.log(arr1);
let arrString = ['anne', 'jane'];
console.log(arrString);
let arrNumber: number[] = [1, 2];
console.log(arrNumber);
let arrAny: any[] = ['a', 1, true];
console.log(arrAny); */

// tuplas
/* let miTupla: [string, number, boolean];
miTupla = ['pepita', 29, true];
console.log(miTupla); */

// objetos
/* let miObject: object;
miObject = {};
console.log(miObject); */
let objPersona1: object;
objPersona1 = {};
objPersona1 = {
  nombre: 'pepita',
  usuario: 'pepa',
  contrasenia: '123',
};
console.log(objPersona1);
let objPersona2: {
  usuario: string;
  contrasenia: string;
  edad: number;
  activo: boolean;
  idGenero?: string;
};
objPersona2 = {
  usuario: 'anne',
  contrasenia: 'ABC',
  edad: 30,
  activo: true,
};
console.log(objPersona2);
