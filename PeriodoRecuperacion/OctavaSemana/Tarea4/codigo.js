


function buscarPalabra() {

    let palabraBuscar = document.getElementById("palabra").value
    let texto = document.getElementById("texto")
    innerHTML = texto.innerHTML 
    


    var index = innerHTML.indexOf(palabraBuscar)
    console.log(innerHTML.substring(index, index + palabraBuscar.length))

    if (index >= 0) {
        innerHTML = innerHTML.substring(0, index) + "<span class='resalto'>" + innerHTML.substring(index,index + palabraBuscar.length) + "</span>" + innerHTML.substring(index + palabraBuscar.length)
        
        texto.innerHTML = innerHTML
    }


   }

