let tiempoAbrirDoc = new Date(Date.now())
let tiempoPulsado
function tiempoTranscurrido() {
    console.log("Boton pulsado")
    tiempoPulsado = new Date(Date.now())

    return console.log(tiempoPulsado - tiempoAbrirDoc)

}

