
var numero1, numero2, numero3, numero4, numero5, numero6

numero1 = Math.floor(Math.random()*50)
numero2 = Math.floor(Math.random()*50)
numero3 = Math.floor(Math.random()*50)
numero4 = Math.floor(Math.random()*50)
numero5 = Math.floor(Math.random()*50)
numero6 = Math.floor(Math.random()*50)

var numeros = [numero1, numero2, numero3, numero4, numero5, numero6]

function repetido(numeros) {
    return numeros.some(function(numero, i) {
         return numeros.indexOf(numero, i+1)>-1})
}

//console.log(repetido(numeros))

while(repetido == true) {
    numero1 = Math.floor(Math.random()*50)
    numero2 = Math.floor(Math.random()*50)
    numero3 = Math.floor(Math.random()*50)
    numero4 = Math.floor(Math.random()*50)
    numero5 = Math.floor(Math.random()*50)
    numero6 = Math.floor(Math.random()*50)
}

console.log("La conbinacion de la loteria es: " + numeros[0] + " " + numeros[1] + " " + numeros[2] + " " 
+ numeros[3] + " " + numeros[4] + " " + numeros[5])