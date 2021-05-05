
let array = [4,0,3,4,7,3,5,8,1,8,8,0,2,3,1,2,5,7,3,2,5,1]
let otroArray = [] // Array nuevo donde guardar los indices

var buscador = array.indexOf(3) // Buscamos 

while (buscador != -1) {
    otroArray.push(buscador) // Añadimos al array nuevo la posicion
    buscador = array.indexOf(3, buscador + 1) // Empezamos a buscar de nuevo desde el ultimo numero encontrado
}

console.log(otroArray)