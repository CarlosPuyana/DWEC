function cambiarFoto(elem) {
    let imagen = document.getElementById("foto")
    imagen.src = elem.value
}

function drop() {
    document.getElementById("descripcion").style.visibility = "visible"
    document.getElementById("descripcion").style.height = "150px"
    document.getElementById("descripcion").style.width = "500px"
    document.getElementById("descripcion").style.position = "relative"
    document.getElementById("descripcion").style.left = "-130px"
    document.getElementById("desaparecer").style.visibility = "hidden"
    document.getElementById("datos").style.position = "relative"
    document.getElementById("datos").style.left = "150px"


}

function validarSerie() {
    let valorSerie = document.getElementById("serie").value
    let serie = document.getElementById("serie")

    let valida = /([0-9]{3})([A-Z]{4})([1]|[2]|[A])/
    //console.log(serie)

    if (valida.test(valorSerie)) {
        console.log("Correcto")
    } else {
        console.log("Error en el numero de serie, es incorrecto")
        serie.style.backgroundColor = '#ff0000'
        serie.style.color = '#ffffff    '
    }

}