// Ejercicio 1 - Date - Carlos Puyana Paraiso

//Declaracion de Variables
let fecha = new Date();

let fechaLimite = new Date("Jun 24 2021")

let resta = fechaLimite - fecha

// Sacamos los dias 
let diasRestantes = Math.floor(resta/(1000 * 60 * 60 * 24))


alert("Quedan: " + diasRestantes + " dias")