// Ejercicio 4.1 - String - Carlos Puyana

// Le preguntamos por su Nombre Completo
let nombre = prompt("Introduce tu nombre")
let primerAp = prompt("Introduce tu primer apellido")
let segAp = prompt("Introduce tu segundo apellido")

alert("Su nombre completo tiene : " + (nombre.length + primerAp.length + segAp.length) + " letras")

// Mostramos el nombre completo en Mayuscula y Minuscula
alert("Nombre Completo en Mayuscula: " + nombre.toUpperCase() + " " + primerAp.toUpperCase() + " " + segAp.toUpperCase())
alert("Nombre Completo en Minuscula: " + nombre.toLowerCase() + " " + primerAp.toLowerCase() + " " + segAp.toLowerCase())

// Mostrar por separado el Nombre Compuesto
alert("Nombre: " + nombre + "\nPrimer Apellido: " + primerAp + "\nSegundo Apellido: " + segAp)

// Propuesta de Nombre Usuario
let propuesta = nombre.substring(0, 1) + primerAp + segAp.substring(0, 1)

alert("Podrias probar con este nombre usuario '" + propuesta + "'")

// Segunda propuesta de Usuario
let segProp = nombre.substring(0, 3) + primerAp.substring(0, 3) + segAp.substring(0, 3)

alert("Podrias probar con este nombre usuario '" + segProp + "'")