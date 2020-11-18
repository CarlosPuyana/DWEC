// Ejercicio 2 - Math - Carlos Puyana

let radio = prompt("Introduce el Radio")

let radioalCubo = Math.pow(radio, 3)
let radioalCuadrado = Math.pow(radio, 2)

let diametro = 2 * radio
let perimetro = Math.PI * diametro

let areaCirculo = radioalCuadrado * Math.PI
let areaEsfera = radioalCuadrado * Math.PI * 4
let volumen = (4/3) * Math.PI * radioalCubo

alert(" Radio: " + radio + "cm\n Diametro: " + diametro + "cm\n Perimetro: " + perimetro + "cm2\n Area del Circulo: " + areaCirculo
 + "cm3\n Area de la Esfera: " + areaEsfera + " cm3\n Volumen de la Esfera: " + volumen + " cm3")