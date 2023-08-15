// VARIABLES

variable = espacio de memoria reservado para el almacenamiento de informacion 
//
declarar-- let nombre  declarar es cuando creamos una variable
inicializar-- nombre = "Eduardo"   inicializar es cuando le asignamos un valor a esa variable
//
el operador para sumar o concatenar es +
cuando sumamos permite sumar numeros y cuando usamos con string es concatenar 
//
Nombre: strings
Apellido: strings
Nombre de usuario: strings
Edad:number
Correo electronico:string
mayor de edad: Booleano
dinero ahorrado: number
deudas: number
//
let nombre = 'Eduardo';
let apellido = 'Castro';
let username = 'eduardcp';
let edad = 2;
let email = 'fecastrop08@gmail.com'
let mayorEdad = true;
let dineroAhorrado = 20303;
let deudas = 2345;
//
let nombreCompleto = nombre + '' + apellido;
let dineroReal = dineroAhorrado - deudas;
//
FUNCIONES

Una funcion es un bloque de codigo que esta encapsulado y ejecuta una tarea especifica, retornando un valor. 

Nos sirve cuando tenemos variables o bloques de codigo parecidos 

la diferencia entre argumento y parametro es: parametro es lo que recibe la funcion cuando las creamos y argumemento es lo que enviamos a la funcion cuando las ejecutamos. 

// CONDICIONALES

un condicional es la ejecucion de un bloque de codigo depenediendo de una condicion o validacion.

if (else if else) Nos permite hacer validaciones completamente distintas
switch todas las validaciones se comparan con la misma variable o condicion que definimos en el switch

SI, las funciones pueden encapsular cualquier bloque de codigo, incluyendo los condicionales.

// ejercicio practico
```js
if (tipoDeSuscripcion == 'Free') {
    console.log("Solo puedes tomar los cursos gratis")
} else if(tipoDeSuscripcion == 'Basic') {
    console.log("puedes tomar los cursos durante un mes")
} else if(tipoDeSuscripcion == 'Expert') {
    console.log("puedes tomar los cursos durante un año")
} else if(tipoDeSuscripcion == 'ExpertDuo') {
    console.log("tu y alguien mas puedes tomar los cursos durante un año")
} 

// CICLOS 

Un ciclo es la forma de ejecutar un bloque de codigo hasta que se cumpla cierta condicion.

Tipos de ciclos
while, Do while, for

Un ciclo infinito es cuando la validacion de nuestros condicionales nunca se cumple y termina dañando la aplicacion

// ejercicio
js
while (respuesta != '4') {
   let pregunta = prompt('Cuanto es 2 + 2 ?')
   respuesta = pregunta;
   }


// ARRAYS Y OBJETOS

Un array es una lista de elementos
ejm  const array = [1, 'Hola', true, false];

Un objeto es una lista de elementos, pero cada elemento tiene un nombre claro 
ejm const obj = {
    nombre:'cosa'
    forma: 'cuadrada'
    tamano: 'small'
};

// ejercicio 

function imprimirPrimerElementoArray(arr) {
    console.log(arr[0]);
}

// 
function imprimirElementos(arr) {
    for (let i = 0 ; i < arr.length; i++);
    console.log(arr[i]); 
}

//

function imprimirObjetos(obj) {
   const arr = object.values(obj);
   for (let i = 0 ; i < arr.length; i++);{
        console.log(arr[i]); 
   }   
}

// 