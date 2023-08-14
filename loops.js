// array 
var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

// funcion 
function saludarEstudiantes(estudiante) {
  console.log(`Hola,${estudiante}`);
}

// loop for

for(var i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

// otra forma de loop for 

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}

//  LOOP WHILE

while(estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiantes(estudiante);
}