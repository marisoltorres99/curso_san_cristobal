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