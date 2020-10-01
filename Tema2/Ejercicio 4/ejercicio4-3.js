// U2T4 - Ventanas (prompt) -- Ejercicio 3   || Carlos Puyana Paraiso

var radio=prompt("Introduce el radio de la circuferencia de la base en cm",10)*1 // Preguntamos el valor del Radio y lo guardamos, por defecto 10
var altura=prompt("Introduce la altura en cm",25)*1 // Preguntamos el valor de la Altura y lo guardamos, por defecto 25
var volumen=Math.PI*(Math.pow(radio,2))*altura // Guardamos el valor del Volumen usando funciones de Math para averiguar PI y elevar el Radio a 2

alert("El volumen es: " + volumen + " cm3") // Mostramos el valor del Volumen