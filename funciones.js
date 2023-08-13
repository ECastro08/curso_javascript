// FUNCIONES DECLARATIVAS

function miFuncion() {
    return 3;
}

// mandando a llamar la funcion declarativa
miFuncion();


// ejemplos de funciones declarativas
// 1
function saludarEstudiante(estudiante) {
    console.log(estudiante); // forma para hacerlo manualmente
    console.log(`Hola ${estudiante}`)  // forma para utilizar base de datos automaticamnete
}
// llamo la funcion y pongo el parametro
saludarEstudiante("Eduardo");

// 2

function sumar(a,b) {
    var resultado = a + b;
    return resultado;
}

// otra forma 
sumar(1,2)

function sumar(a,b) {
    return a + b;
}

sumar(1,2)

// FUNCIONES EXPRESIVAS O ANONIMAS

var miFuncion = function(a,b){
    return a + b;
}

// mandando a llamar la funcion expresiva
miFuncion();