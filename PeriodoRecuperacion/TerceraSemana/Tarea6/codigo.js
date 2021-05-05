let valor = [14, 3, 89, 10, 8, 45, 65]

valor.sort((a, b ) => a - b)

let media = (Math.floor((valor.length-1) /2 )) + (Math.ceil((valor.length-1) /2 ))

alert(media)