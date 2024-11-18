// Typescript playground: https://www.typescriptlang.org/play 
// console.log(): https://developer.mozilla.org/en-US/docs/Web/API/console/log_static 
// forEach: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// filter(): https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
// Más práctica online: https://www.w3schools.com/typescript/exercise.php?filename=exercise_intro1 



// Ejercicio 1
// Declarar una variable de tipo string llamada "nombre" y asignarle tu nombre.
// Declarar una variable de tipo number llamada "edad" y asignarle tu edad.
// Declarar una variable de tipo boolean llamada "esEstudiante" y asignarle true o false.
// Imprimir en consola el valor de cada variable usando console.log()

let nombre: string = "Marisol";
let edad: number = 25;
let esEstudiante: boolean = true;

console.log("Nombre: ", nombre, ", Edad: ", edad, ", Es estudiante: ", esEstudiante);

// Ejercicio 2
// Declarar una función que reciba dos números como parámetros y retorne su suma.
// Asegurar que los parámetros y el valor de retorno sean de tipo number.
// Llamar a la función e imprimir el resultado.
// Realizar otra función que reste dos números.
// Realizar otra función que multiplique dos números.

function sumar(a: number, b:number): number {
    return a + b;
}

console.log(sumar(1, 2));

// Ejercicio 3
// Crear un array de números llamado "numeros" y agregar algunos valores.
// Usa un bucle para imprimir cada número multiplicado por 2 (usando forEach())

let numeros: number[] = [2, 4, 6, 8];
numeros.forEach(num => {
    console.log(num*2);
})

// Ejercicio 4
// Declarar una interfaz "Persona" con las propiedades: nombre (string), edad (number), y esEstudiante (boolean).
// Crear tres objetos que sigan la estructura de la interfaz.
// Imprimir en consola.

interface Persona {
    nombre: string;
    edad: number;
    esEstudiante: boolean;
}

let persona1: Persona = {nombre: "Ana", edad: 20, esEstudiante: true};
let persona2: Persona = {nombre: "Pablo", edad: 30, esEstudiante: false};
let persona3: Persona = {nombre: "Julia", edad: 25, esEstudiante: true};

console.log(persona1);
console.log(persona2);
console.log(persona3);

// Ejercicio 5
// Declara una variable que pueda ser de tipo string o number.
// Asigna un valor string y luego cambia su valor a number.
// Imprimir en consola ambos casos.

let valor: string | number;
valor = "Marisol";
console.log(valor);

valor = 25;
console.log(valor); 

// Ejercicio 6
// Definir una interfaz "Producto" con propiedades: nombre (string), precio (number), y enStock (boolean).
// Crear un array de "productos" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los productos en stock (sólo en stock). 
// Crear otra función que reciba el array y retorne los productos sin stock (sólo sin stock). 
// Se puede usar método filter() para esto.

interface Producto {
    nombre: string;
    precio: number;
    enStock: boolean;
}

const productos = [
    {nombre: "mesa", precio: 20000, enStock: false},
    {nombre: "mantel", precio: 2000, enStock: true},
    {nombre: "silla", precio: 5000, enStock: false},
    {nombre: "escritorio", precio: 30000, enStock: true},
    {nombre: "sillon", precio: 50000, enStock: true},
    {nombre: "mesa ratona", precio: 10000, enStock: true},
]

function productosEnStock(productos: Producto[]){
    return productos.filter(producto => producto.enStock);
}

console.log(productosEnStock(productos));

function productosSinStock(productos: Producto[]){
    return productos.filter(producto => !producto.enStock);
}

console.log(productosSinStock(productos));

// Ejercicio 7
// Definir una interfaz "Cliente" con 4 propiedades a elección (por ahora solamente tipos string, booleanos y numbers).
// Crear un array de "clientes" con seis objetos que sigan la interfaz.
// Crear una función que reciba el array y retorne los clientes que cumplan una condición (segun el booleano que hayamos creado). 
// Crear otra función que reciba el array y retorne los clientes que cumplan la condición inversa al punto de arriba (mismo booleano que hayamos elegido). 
// Se puede usar método filter() para esto.

interface Cliente {
    nombre: string;
    apellido: string;
    idCliente: number;
    esSocio: boolean;
}

const clientes = [
    {nombre: "Marisol", apellido: "Torres", idCliente: 1, esSocio: true},
    {nombre: "Liza", apellido: "Strappini", idCliente: 2, esSocio: false},
    {nombre: "Juan", apellido: "Perez", idCliente: 3, esSocio: true},
    {nombre: "Juliana", apellido: "Gimenez", idCliente: 4, esSocio: true},
    {nombre: "Pablo", apellido: "Rodriguez", idCliente: 5, esSocio: true},
    {nombre: "Pamela", apellido: "Ruiz", idCliente: 6, esSocio: false},
]

function clientesSocios(clientes: Cliente[]){
    return clientes.filter(cliente => cliente.esSocio);
}

console.log(clientesSocios(clientes));

function clientesNoSocios(clientes: Cliente[]){
    return clientes.filter(cliente => !cliente.esSocio);
}

console.log(clientesNoSocios(clientes));

//Ejercicio 8: Catálogo de Productos - forEach
//Crear un array llamado catalogo con varios objetos de productos. 
//Cada producto debe tener las propiedades nombre (string) y precio (number).
//Usar forEach para imprimir el nombre y el precio de cada producto. 
//https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

interface Producto2 {
    nombre: string;
    precio: number;
};

const catalogo: Producto2[] = [
    { nombre: "Producto A", precio: 30 },
    { nombre: "Producto B", precio: 40 },
    { nombre: "Producto C", precio: 50 },
];

catalogo.forEach(producto => {
    console.log(`Nombre: ${producto.nombre}, Precio: ${producto.precio}`);
});

//Ejercicio 9: Catálogo de Productos - filter
//Utilizar filter para crear un nuevo array 
//llamado productosBaratos que solo contenga los productos 
//con precio menor a 50. https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter 
//Imprimor productosBaratos en la consola.

const productosBaratos = catalogo.filter(producto => producto.precio < 50);
console.log(productosBaratos); 

//Ejercicio 10: Actualización de Inventario - map
//Utilizar map para crear un nuevo array catalogoConDescuento,
// donde cada producto tenga un 10% menos de precio. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 
//Imprimir catalogoConDescuento en la consola.

const catalogoConDescuento = catalogo.map(producto => ({
    ...producto,
    precio: producto.precio * 0.9
}));

console.log(catalogoConDescuento);

//Ejercicio 11: Búsqueda de Usuario - find
//Crear un array llamado usuarios con varios objetos de usuario. 
//Cada usuario debe tener id (number), nombre (string) y activo (boolean).
//Usar find para buscar el usuario con el id 3. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find 
//Imprimir en la consola el objeto del usuario encontrado.

interface Usuario {
    id: number,
    nombre: string,
    activo: boolean,
};

const usuarios: Usuario[] = [
    { id: 1, nombre: "Juan", activo: true },
    { id: 2, nombre: "Marisol", activo: false },
    { id: 3, nombre: "Delfina", activo: true },
];

const encontrarUsuario = usuarios.find(usuario => usuario.id === 3);
console.log(encontrarUsuario);

//Ejercicio 12: Contador de Usuarios Activos - filter y length
//Utilizar filter para crear un nuevo array usuariosActivos 
//que contenga solo los usuarios con activo: true.
//Usar la propiedad length para contar cuántos usuarios activos 
//hay y muestra el resultado en la consola. https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length 

const usuariosActivos = usuarios.filter(usuario => usuario.activo);
console.log(usuariosActivos.length);

//Ejercicio 13: Actualización de Estado de Usuarios
//Usando un bucle forEach, cambiar la propiedad activo de cada usuario a false.
//Imprimir el array usuarios para verificar que todos los usuarios están inactivos.

usuarios.forEach(usuario => usuario.activo = false);
console.log(usuarios);

//Ejercicio 14: Formateo de Productos para Mostrar - map
//Usar el array catalogo.
//Utilizar map para crear un nuevo array productosFormato que contenga el nombre y precio de cada producto como un string en el formato "Producto: [nombre], Precio: $[precio]".
//Para esto podemos usar template strings `string text ${expression} string text`: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals 
//Imprimir el array productosFormato en la consola.

const productosFormato = catalogo.map(producto => 
    `Producto: ${producto.nombre}, Precio: $${producto.precio}`
);

console.log(productosFormato);

//Ejercicio 15:
//Con los datos que tenemos, crear una interfaz "User" 
//y aplicarla, para que el siguiente codigo compile sin errores:

interface User {
    name: string,
    age: number,
    occupation: string,
};

const users: User[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    }
];

function logPerson(user: User) {
    console.log(` - ${user.name}, ${user.age}`);
}

console.log('Users:');
users.forEach(logPerson);

//Ejercicio 16:
//Vamos a volver a usar la interfaz User del ejercicio anterior.
//Crear una nueva interfaz Admin segun los datos que tenemos.
//Corregir el type Person para que acepte dos tipos: User y 
//la nueva interfaz. 
//Corregir la implementacion para aplicar el type Person 
//para que el siguiente codigo compile sin errores. 

interface Admin {
    name: string,
    age: number,
    role: string,
};

type Person = User | Admin;

const persons: Person[] = [
    {
        name: 'Max Mustermann',
        age: 25,
        occupation: 'Chimney sweep'
    },
    {
        name: 'Jane Doe',
        age: 32,
        role: 'Administrator'
    },
    {
        name: 'Kate Müller',
        age: 23,
        occupation: 'Astronaut'
    },
    {
        name: 'Bruce Willis',
        age: 64,
        role: 'World saver'
    }
];

function logPerson2(user: Person) {
    console.log(` - ${user.name}, ${user.age}`);
    if ('occupation' in user) {
        console.log(`   Occupation: ${user.occupation}`);
    } else if ('role' in user) {
        console.log(`   Role: ${user.role}`);
    }
}

console.log('Persons:');
persons.forEach(logPerson2);