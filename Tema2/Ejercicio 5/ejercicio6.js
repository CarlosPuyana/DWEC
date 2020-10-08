
// U2T5 - Ejercicios varios Ejercicio 6 Carlos Puyana Paraiso

var dia=parseInt(prompt("Que dia de la semana es (1/7")) // Preguntamos el dia y lo pasamos a entero

switch(dia) { // Segun el numero, dira el dia siguiente
    case 1:
        console.log("Mañana sera Martes")
        break;
    case 2:
        console.log("Mañana sera Miercoles")
        break;
    case 3:
        console.log("Mañana sera Jueves")
        break;
    case 4:
        console.log("Mañana sera Viernes")
        break;
    case 5:
        console.log("Mañana sera Sabado")
        break;
    case 6:
        console.log("Mañana sera Domingo")
        break;
    case 7:
        console.log("Mañana sera Lunes")
        break;
    default:
        console.log("Numero invalido")
        break;
}