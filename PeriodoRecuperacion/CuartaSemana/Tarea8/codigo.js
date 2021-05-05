

var fecha1 = prompt("Introduce una fecha")
console.log(fecha1)

let separador = "/"
var arreglo = fecha1.split(separador)

console.log(arreglo)

var comprobante = "1"

console.log("Antes: " + arreglo[0].length)
console.log("Antes: " + arreglo[1].length)


 while (comprobante==="1") {
    var fecha1 = prompt("Introduce una fecha")
    arreglo = fecha1.split(separador)
    console.log("Despues: " + arreglo[0].length + arreglo[0])
    if (arreglo[0].length=2) {
        comprobante = "0"
    } else {
        comprobante = "1"
    }
}
console.log(comprobante)

console.log(fecha1)