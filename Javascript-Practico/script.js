const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
})


// escribiendo html desde js

h1.innerHTML = "pato"   // cambio el texto de la etiqueta h1
// 
//console.log(h1.getAttribute('class'));
// modificar la clase
//h1.setAttribute('class','verde')  // modificamos la clase a verde

// otra forma

h1.classList.add('azul');  // agregamos una clase llamada azul
h1.classList.remove('rojo');  // elimino la clase azul en el html


// modificando el input value

input.value = "45678";

// crear un elemeno desde cero

const img = document.createElement('img'); // creamos la imagen 
img.setAttribute('src', 'https://images.pexels.com/photos/3777622/pexels-photo-3777622.jpeg?auto=compress&cs=tinysrgb&w=400');
console.log(img);

//pid.append(img);  // insertamos la imagen en el contenedor pid sin eliminar el contenido de pid
pid.replaceChildren(img);  // insertamos la imagen y borra el contenido de pid
// document.createElement('span')
