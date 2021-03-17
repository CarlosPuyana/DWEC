

// Calculamos un numero aleatorio

let num = Math.round(Math.random()*100)

alert(num)

var numus = parseInt(prompt("Dime un numero")) // Preguntamos el numero
var intentos=1


console.log("prueba")
while (isNaN(numus)) { // Mientras que el numero no sea un numero se le volvera a preguntar
    numus = parseInt(prompt("Error. \n Introduce un numero"))
    intentos++ // Sumamos un intento
}



while (numus!= num || numus != null) { // Mientras que el numero introducido no es igual al numero a adivinar entramos en bucle
    console.log(numus)

    if (numus > num) { // Si el numero es mayor que al adivinar, se le notifica y suma 1 intento
        numus = parseInt(prompt("El numero introducido es mayor que el numero a adivinar. \n Introduce un numero"))
        console.log(numus)
        intentos++
    } else if (numus < num) { // Si el numero es menor que al adivinar, se le notifica y suma 1 intento
        numus = parseInt(prompt("El numero introducido es menor que el numero a adivinar. \n Introduce un numero"))
        console.log(numus)
        intentos++
    }

    
}

if (numus === null) {
    alert("Se ha cancelado el juego")
}

    if(numus == num) { // Si el numero es igual al que adivinar, se le notifica que acerto y los intentos hechos.
        alert("Has acertado el numero en " + intentos + " intentos.")
    }


