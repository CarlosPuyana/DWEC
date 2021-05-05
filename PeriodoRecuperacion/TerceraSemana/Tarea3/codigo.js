

var texto = prompt("Introduce una frase") // Preguntamos la frase

texto=texto.toLowerCase().replace(/\s/g,"") // Quitamos los espacios y lo ponemos en minus

var textoReves = texto.split("").reverse().toString() // convertimos a array, le damos la vuelta y lo pasamos a string

for (let index = 0; index < ((textoReves.length)-1); index++) {
    textoReves = textoReves.replace(",","")    // Le quitamos las comas si es que tiene coma
}

if (texto === textoReves) { // Miramos si son iguales 
    console.log("Es un palindromo")
} else {
    console.log("No lo es")
}