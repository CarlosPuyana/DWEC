
function Puntos() {
    this.ejeX
    this.ejeY

    this.introducirPunto = function(ejeX, ejeY) {
        if(!isNaN(ejeX)) {
            this.ejeX = ejeX
        } else {
            this.ejeX = 0
        }

        if(!isNaN(ejeY)) {
            this.ejeY = ejeY
        } else {
            this.ejeX = 0
        }

    }

    this.cambiar = function(nuevoX, nuevoY) {
        this.nuevoX = ejeX
        this.nuevoY = ejeY
    }

    this.iguales = function(nuevoX, nuevoY) {
        let iguales = false

        if (this.ejeX===nuevoX && this.ejeY===nuevoY) {
            iguales = true
        }

        alert("Los puntos son " + iguales)
    }

    this.suma = function(nuevoX, nuevoY) {
        let tercerX = this.ejeX + nuevoX
        let tercerY = this.ejeY + nuevoY

        alert(tercerX + " " + tercerY)

    }

    this.obtenerDistancia = function(nuevoX, nuevoY) {
        let resultado = Math.sqrt((Math.pow((nuevoX-nuevoY),2)) + Math.pow((this.ejeX - this.ejeY),2))

        alert("La distancia entre los puntos es: " + resultado)
    }


    this.toString = function() {
        alert(this.ejeX + ", " + this.ejeY)
    }

}

