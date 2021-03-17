let valores = [true, 5, false, "hola", "adios", 2];

for (let i=0; i < valores.length; i++) {
    console.log(valores[i])
}

if (valores[3].length>valores[4].length) {
    console.log(valores[3] + " es mayor que " + valores[4] + "? " + valores[0])
} else {
    console.log(valores[3] + " es mayor que " + valores[4] + "? " + valores[2])
}


console.log( "Operaciones Matematicas entre " + valores[1] + " y " + valores[valores.length-1] +
    " \n Suma: " + (valores[1] + valores[valores.length-1]) + " \n Resta: " + (valores[1] - valores[valores.length-1]) 
+ " \n Multiplicacion: " + (valores[1] * valores[valores.length-1]) + " \n Division: " + (valores[1] / valores[valores.length-1]) 
+ " \n Resto: " + (valores[1] % valores[valores.length-1]))
