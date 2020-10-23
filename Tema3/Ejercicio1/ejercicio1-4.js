// Ejercicio 4 - Date - Carlos Puyana Paraiso

function Formato() {
    let formatoHora = document.getElementById("prueba").value // Cogemos el valor de la opcion elegida
    let fecha = new Date()
    
    // Guardamos los datos de ahora mismo
    let hora = fecha.getHours()
    let minutos = fecha.getMinutes()
    let segundos = fecha.getSeconds()

    let franjaHoraria = "AM"

    if (formatoHora === "1") { // Si es la primera opcion
        alert("Hora Actual: " + hora + " : " + minutos + " : " + segundos)
        
    } else if (hora > 12) { // Si es la segunda opcion es mayor que las 12 pone la franja horaria
        hora = hora - 12
        franjaHoraria = "PM"
        alert("Hora Actual: " + hora + " : " + minutos + " : " + segundos + " " + franjaHoraria)
        }

}