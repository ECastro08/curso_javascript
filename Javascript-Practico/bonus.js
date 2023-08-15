function conseguirTipoSUscripcion (suscripcion) {
    if (suscripcionuscripcion == 'Free') {
        console.log("Solo puedes tomar los cursos gratis");
        return;

    } if(suscripcion == 'Basic') {
        console.log("puedes tomar los cursos durante un mes");
        return;

    } if(suscripcionuscripcion == 'Expert') {
        console.log("puedes tomar los cursos durante un año");
        return;

    } if(suscripcionuscripcion == 'ExpertDuo') {
        console.log("tu y alguien mas puedes tomar los cursos durante un año");
        return;
    } 
    console.warm("Ese tipo de suscripcion no existe")

}


const tiposDeSuscripciones = {
    free: "eres free"
    basic: "eres basic"
    expert: "eres expert"
    expertduo: "Eres expert Duo"
}

function conseguirTipoSUscripcion(suscripcion) {
    if (tiposDeSuscripciones[suscripcion]) {
        console.log(tiposDeSuscripciones[suscripcion]);
        return;
    }
    console.warm("ese tipo de suscripcion no existe")
}


function() {
    if () {
        
    }
}