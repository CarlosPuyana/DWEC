// Ejercicio 1 - Math - Carlos Puyana

function Funcion() {
    let formato = document.getElementById("elegir").value // Cogemos el valor de lo que elige

    if (formato == 1) { // Sacamos la potencia
        let base = prompt("Introduce la base")
        let exponente = prompt("Introduce el exponente")

        let potencia = Math.pow(base, exponente) // Aqui guardamos la potencia

        alert(base + " elevado a " + exponente + " es " + potencia)

    } else if (formato == 2 ) { // Sacamos la raiz cuadrada
        let numero = prompt("Introduce un numero")
        
        while (numero < 0) {
            numero = prompt("Has introducido un numero negativo")
        }
        let raiz = Math.sqrt(numero) // Guardamos la raiz

        alert("La raiz cuadrada es " + raiz)

    } else if (formato == 3) { // Sacamos el rondeando
        let numero = prompt("Introduce un numero")
        
        while (numero%1 == 0) {
            numero = prompt("Tiene que ser decimal")
        }

        let alto = Math.ceil(numero) // Guardamos el rondeando por arriba y por abajo
        let bajo = Math.floor(numero)

        alert("El numero " + numero + " \n Rodeando por arriba es : " + alto
        + " \n y rodeando por abajo es: " + bajo)

    } else if (formato == 4) { // Hacemos las operaciones trigonometricas
        let angulo = prompt("Introduce los grados")

        while(angulo<0 || angulo>360) {
            angulo = prompt("Introduce unos valores validos (0-360)")
        }

        let seno = Math.sin(angulo) // Guardamos el seno, coseno y tangente
        let coseno = Math.cos(angulo)
        let tangente = Math.tan(angulo)

        alert("Seno: " + seno + "\n Coseno: " + coseno + "\n Tangente: " + tangente)

    }

}