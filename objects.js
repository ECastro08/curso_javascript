// sintaxis

var objeto = {propiedades:valor};

// ejm

var miAuto = {
    marca:"Toyota",
    modelo: "corolla",
    annio: 2023
    detalleDelAuto: function(){
        console.log(`auto ${this.modelo} ${this.annio}`)
    }
};

// acceder a un objeto

miAuto["marca"] // NOtacion de corchetes
miAuto.marca    // Notacion de punto

// llamado a los metodos del objeto

miAuto.detalleDelAuto();

