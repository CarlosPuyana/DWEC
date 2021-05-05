let fechaActual = new Date()
let fecha2 = new Date()
fecha2.setHours(26)

console.log(fecha2 + " || " + fechaActual)
// Al ser el formato 24 horas, cuando pasa el numero 24, vuelve a 0, por lo que es 2am

fecha2.setMinutes(65)
// Aqui pasa lo mismo, el formato al ser de 60 minutos, cuando pasa el numero 60 pasa al 0, por lo que es 05
console.log(fecha2 + " || " + fechaActual)
