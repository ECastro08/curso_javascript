if (true) {
    console.log("hola");
}  else {
    console.log("soy falso")
}

// if anidados

var piedra = "piedra";
var papel = "papel";
var tijera = "tijera";

function PiedraPapelTijera (player1,player2) {
    if (player1 != player2) {
        if (player1 = piedra && player2 = tijera) {
            console.log("Gana player1")
        } else if (player1 = papel && player2 = piedra) {
            console.log("gana player1 ")
        }
    }
}
    

//
function calcularDescuento(articulos, precio) {
    var precioFinal
  
    if (articulos <= 5) {
      //Hasta 5 artículos
      precioFinal = precio * (1 - 0.1)
    } else if (articulos > 5 && articulos <= 10) {
      //De 6 a 10 artículos
      precioFinal = precio * (1 - 0.15)
    } else {
      //De 10 artículos en adelante
      precioFinal = precio * (1 - 0.2)
    }
  
    return precioFinal
  }
  
  calcularDescuento(4, 10) // 9
  calcularDescuento(8, 20) // 17
  calcularDescuento(15, 50) // 40


  // operador Tenario
// condicion ? Bloque verdadero : Bloque falso

function esPar(numero){
    return numero % 2 === 0 ? "Es par" : "No es par"
}

esPar(2) // "Es par"
esPar(3) // "No es par"


    





