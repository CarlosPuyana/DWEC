

var array =[]

for (let index = 0; index < 5; index++) {
    
    array[index] = Math.floor((Math.random()*5))
    
    
}

for (let i=0; i < 5; i++) {
    let numero
    numero = array[i]
    console.log(numero)
    for (let f = 0; f < numero; f++) {
        let piso=""
        document.write(piso += "*")

        document.write("<br>")
        
    } 
}

console.log(array)
