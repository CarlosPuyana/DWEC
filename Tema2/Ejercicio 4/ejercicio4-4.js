// U2T4 - Ventanas (prompt) -- Ejercicio 4   || Carlos Puyana Paraiso

var nombre=prompt("¿Cual es tu nombre?","Manuel") //Guardamos el nombre, por defecto Manuel
var edad=prompt("¿Cual es tu edad?",18)*1   // Guardamos la edad
var dias=edad*365 // Guardamos los dias vividos, edad * 365 dias que tiene un año (No se tiene en cuenta los años bisiestos)

if(edad>=18) { // Si es mayor o igual de 18
    alert("Hola " + nombre + "\n Eres Mayor de Edad y has vivido " + dias + " dias")
} else { // Sino (Menor de 18)
    alert("Hola " + nombre + "\n Eres Menor de Edad y has vivido " + dias + " dias")
}
