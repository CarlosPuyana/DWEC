

// No se hacerlo


let letras="ABCDEFGHIJKLMNOPQRSTUVWXYZ" // Abecedario

var texto_cifrado = "" // Texto cifrado vacio

var texto = prompt("Escribe un texto").toUpperCase() // Preguntamos el texto a cifrar y lo ponemos en mayuscula
var clave = parseInt(prompt("Escribe una clave")) 

var desplazamiento = (clave % 26 + 26) % 26 // Hacemos esto por si la letra se va del numero 26, donde no corresponde a ninguna letra

//console.log(desplazamiento)

    for (let index = 0; index < texto.length; index++) { // Un bucle for desde 0 hasta el final del texto a cifrar
        if (letras.indexOf(texto[index]) != -1) {
            //console.log(texto[index])
            let posicion = ((letras.indexOf(texto[index]) + desplazamiento) % 26)

            texto_cifrado += letras[posicion]

        } else {
            texto_cifrado += texto[index]
        }
        
    }
    console.log(texto_cifrado)



