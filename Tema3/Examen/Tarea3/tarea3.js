let texto = prompt("Introduce : 'Tipo_Producto|modelo|cantidad@cz' \nLos productos disponibles son: Televisor, tablet, smartphone y laptop"
+ "\n Los modelos deben de tener 3 mayusculas y 3 numeros \nCantidad debe de ser un numero entero \nCZ debe de ser las dos primeros digitos de la ciudad")

let palabras = texto.split("|")

let cz = texto[2].split("@")

let productos = false
let modelo = false

if (palabras[0]==="televisor" && palabras[0]==="tablet" && palabras[0]==="smartphone" && palabras[0]==="laptop") {
    productos=true
}

let cantidadnumeros=0
let cantidadLetras=0
/* for (let index = 0; index < palabras[1].length; index++) {
    let numeros="0123456789"
    let letras="abcdefghijklmnopqrstuvwyxz"
    
    if (numeros.indexOf(palabras[1].charAt(index), 0)!=-1) {
        cantidadnumeros++
    } else if(letras.indexOf(palabras[1].charAt(index), 0)!=-1) {
        cantidadLetras++
    }
    
}

if (cantidadnumeros==3 && cantidadLetras==3) {
    modelo=true
} */

if (productos==true /*&& modelo==true*/) {
    alert("Producto: " + palabras[0] + " Modelo: " + palabras[1] + " Cantidad: " + palabras[2] + " CZ: " + cz[0])
}