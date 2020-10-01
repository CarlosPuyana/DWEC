// U2T4 - Ventanas (prompt) -- Ejercicio 1   || Carlos Puyana Paraiso

var respuesta=prompt("¿Está seguro de que quiere hacer esto?") // Guarda la respuesta


if(respuesta==null) { // Si la respuesta es nula (Le ha dado a Cancelar)
    alert("Ha rehusado contestar") // Mostrara este mensaje
} else if(respuesta) { // Si ha tenido una respuesta
    alert("Has respondido: " + respuesta)
} else { // Pero si no ha recibido respuesta (No ha introducido una respuesta valida, le dio a aceptar)
    alert("No has respondido")
}