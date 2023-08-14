
// funcion constructora 

function auto(marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;   
}

// crear objetos nuevos

var autoNuevo = new auto("Nissan", "March", 2023);
var autoNuevo2 = new auto("Toyota", "Fortuner", 2023);
var autoNuevo3 = new auto("Audi", "tt RS", 2019);
