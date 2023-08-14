// Creacion del array 

var frutas = ["mango", "mandarina", "banano", "fresa"];

console.log(frutas);
console.log(frutas.length); // longitud del array .length
console.log(frutas[indice]); // buscar elemento del array

// Metodos para mutar el contenido del array

var masFrutas = frutas.push("uvas"); // .push() añade elementos al final del array
var ultimo = frutas.pop(); //.pop() elimina el ultimo elemento del array
var nuevaLongitud = frutas.unshift("elemento"); // .unshift agrega el "elemento" al inicio del array
var borarfruta = frutas.shift("elemento"); // elimina el primer elemento del array
var posicion = frutas.indexOf("banano"); // busca el indice del elemento en el array


// Metodos para recorrer el contenido del array

