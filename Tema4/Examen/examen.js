
function validar() {

// Cogemos valores del formulario
var producto = document.getElementById("producto").value
var modelo = document.getElementById("modelo").value
var fecha = document.getElementById("fecha").value
var consumo = document.getElementById("consumo").value

var vacio = false
var mod_inco = false
var consu_inco = false
var fecha_inco = false

// Validamos si el campo "producto" no este vacio
if (producto.length == 0) {
    vacio = true
    //alert("Prueba, esta vacio")
}

// Validamos si ha elegido en el campo "modelo"
if (modelo=="0") {
    mod_inco = true
    //alert("Prueba, tienes que seleccionar uno")
}

// Validamos si el campo "consumo" esta bien puesto
if (consumo=="A+++" || consumo=="A++" || consumo=="A+" || consumo=="A" || consumo=="B" || consumo=="C" || consumo=="D") {
    consu_inco = false
    //alert("Esta correctp")
} else {
    consu_inco = true
    //alert("Incorrecto")
}

//let separador = "-"
//01-01-2001

// Vemos si el maximo es 10, y encogemos la cadena en variables
if (fecha.length == 10) {
    var dia = parseInt(fecha.substr(0, 2))
    var mes = parseInt(fecha.substr(4, 6))
    var ano = parseInt(fecha.substr(6, 10))
}

// Validamos que la fecha sea correcta
if ((dia>=1 && dia<=31) && (mes>=1 && mes<=12) && (ano>=1900 && ano<=2020)) {
    fecha_inco = false
    //alert("correcto dia y mes y año")
} else {
    fecha_inco = true
    //alert("inco")
}


}