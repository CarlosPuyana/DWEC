
// U2T5 - Ejercicios varios Ejercicio 5 Carlos Puyana Paraiso

var numero=parseInt(prompt("Elige un numero del 2 al 10"))  // Preguntamos el numero

while (!(numero>=2 && numero<=10)) {    // Mientras que no este entre 2 y 10 seguira preguntando
    numero=prompt("Elige un numero del 2 al 10")
}

for (let index = 0; index <= 10; index++) { // Recorreremos de 0 a 10
    console.log(numero + " x " + index + " = " + (numero*index)) // Y lo multiplicamos y mostramos
    
}
console.log("Suma")
var n=0
while (n>=0 && n<=10) { // Recorreremos de 0 a 10
    console.log(numero + " + " + n + " = " + (numero+n)) // Y lo sumamos y mostramos
    n++
}

console.log("resta")
n=0
do { // Recorreremos de 0 a 10
    console.log(numero + " - " + n + " = " + (numero-n))    // Y lo restamos y mostramos
    n++
}while (n>=0 && n<=10);