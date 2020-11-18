// Ejercicio 4.2 - String - Carlos Puyana

// Se declara las variables con todas las letras, numeros y caracteres especiales
let letras = "abcdefghijklmnñopqrstuvwxyz";
let letrasMayus = letras.toUpperCase();
let numeros = "1234567890";
let letrasEspeciales = "-_@#$%&";

let contrasena = prompt("Introduce una contraseña") // Pedimos la contraseña a verificar

let longitud = false
let mayus = false
let minus = false
let num = false
let especial = false


// Mediante funciones verificamos si incluyen los caracteres que buscamos
function mayuscula(verificar) {
    return letrasMayus.includes(verificar)
}

function minuscula(verificar) {
    return letras.includes(verificar)
}

function numero(verificar) {
    return numeros.includes(verificar)
}

function especiales(verificar) {
    return letrasEspeciales.includes(verificar)
}

// Verificamos si la longitud es segura
if (contrasena.length >= 8 && contrasena.length <= 16) {
    longitud = true
}

// Mediante un bucle for miramos letra a letra que tipo de caracter es y si tiene al menos 1 caracter la ponemos en True
for (let i = 0; i < contrasena.length; i++) {
    let letra = contrasena.charAt(i)
   
    if (mayuscula(letra)) {
        mayus = true
    }

    if (minuscula(letra)) {
        minus = true
    }

    if (especiales(letra)) {
        especial = true
    }

    if (numero(letra)) {
        num = true
    }   

}

// Verificamos todo y decimos si es segura o insegura
if (longitud && mayus && minus && especial && num) {
    alert("Es segura")
} else {
    alert("Es insegura")
}

