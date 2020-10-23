// Ejercicio 2 - Date - Carlos Puyana Paraiso

// Se declara las variables

let mes = prompt("Introducir el mes de su cumpleaños (numero): ")
mes = mes - 1  // Debido a que en Date el primer mes es el 0, le restamos 1

let dia = prompt("Introducir el dia de su nacimiento: ")

let fecha = new Date()

// Introducimos el mes y dia en la Fecha
fecha.setMonth(mes)
fecha.setDate(dia)

let contador = 0, ano = 2020

while (fecha.getFullYear() != 2100) { // Mientras que el año no supere 2100 d.c
    if (fecha.getDay() == 0) { // Si el dia cae en Domingo, se suma al contador
        contador++ // 
    }
    ano++ // Añadimos un año mas, para comprobar el siguiente
    fecha.setFullYear(ano) // Añadimos el año a la fecha
}

alert("Caera en domingo en total: " + contador + " veces")