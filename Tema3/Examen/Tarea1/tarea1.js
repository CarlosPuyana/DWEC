function Bandeja() {

    let fechaBandeja = new Date()
    let fechaUltVenta = new Date()
    
    fechaUltVenta.setHours()

    this.tipoPastel = ""
    this.variedadPastel = "" 
    this.cantidad = 0
    this.tiempoElaboracion = 0


this.introducirBandeja = function(tipoPastel, variedadPastel, cantidad, tiempoElaboracion, horaVenta, minutoVenta, segundosVenta) {
    this.tipoPastel = tipoPastel
    this.variedadPastel = variedadPastel
    this.cantidad = cantidad
    this.tiempoElaboracion = tiempoElaboracion
    fechaUltVenta.setHours() = horaVenta
    fechaUltVenta.setMinutes() = minutoVenta
    fechaUltVenta.setSeconds() = segundosVenta

}


this.setTipoPastel = function(tipoPastel) {
    this.tipoPastel = tipoPastel

}

this.setVariedadPastel = function(variedadPastel) {
    this.variedadPastel = variedadPastel

}

this.setCantidad = function(cantidad) {
    this.cantidad = cantidad

}

this.setTiempoElaboracion = function(tiempoElaboracion) {
    this.tiempoElaboracion = tiempoElaboracion

}

/* this.setHoraVenta = function(horaVenta) {
    this.horaVenta = horaVenta

} */

this.tiempo_venta = function() {
    let difHora = fechaBandeja.getHours - fechaUltVenta.getHours
    let difMinuto = fechaBandeja.getMinutes - fechaUltVenta.getMinutes
    let difSegundos = fechaBandeja.getSeconds - fechaUltVenta.getSeconds

    alert("La diferencia es: " + difHora + ":" + difMinuto + ":" + difSegundos)
}

this.toString = function() {
    let tiempoUltVenta = " " + fechaUltVenta.getHours + ":" + fechaUltVenta.getMinutes + ":" + fechaUltVenta.getSeconds
    let tiempoBandeja = " " + fechaBandeja.getHours + ":" + fechaBandeja.getMinutes + ":" + fechaBandeja.getSeconds
    alert("Tipo de Pastel: " + this.tipoPastel + "\nVariedad: " + this.variedadPastel + 
    "\nCantidad: " + this.cantidad + "\nHora Ultima Venta: " + tiempoUltVenta + "\n Hora: " + tiempoBandeja)
}

}

