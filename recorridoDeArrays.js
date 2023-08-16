// ARRAY DE OBJETOS

var articulos = {
    {nombre:"bici", costo: 3000},
    {nombre:"tv", costo: 2500},
    {nombre:"libro", costo: 320},
    {nombre:"celular", costo: 1000},
    {nombre:"laptop", costo: 20000},
    {nombre:"teclado ", costo: 500},
    {nombre:"audifonos", costo: 1700},
}

// metodos para recorrer el array de objetos

// Metodo FILTER
// muestra los articulos que cuestan menor a 500 

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});


// Metodo MAP
// solo me trae los nombres de los articulos 

var nombreArticulos = articulos.map(function(articulo){
  return articulos.nombre;
});

// metodo FIND()

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop"
});

// metodo ForEach()

articulos.forEach(function(articulo) {
    console.log(articulo.nombre);
});

// metodo some()
// nos regresa true si hay articulos que son menor a 700 

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <=700;
});

