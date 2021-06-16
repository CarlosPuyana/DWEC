document.getElementById("cargar_vehiculos").addEventListener("click", XML , false)
document.getElementById("enviar").addEventListener("click", validaciones, false)


function XML() {
    let xhr = new XMLHttpRequest()
    let elXML

    xhr.onreadystatechange = function() {
        if (this.status == 200 && this.readyState == 4) {
            elXML = JSON.parse(this.responseText)
            insertarEnBaseDatos(elXML);
        }
    }

}

function insertarEnBaseDatos(elXML) {

    fetch('insertar_vehiculos.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(elXML)
    }).then(function (response) {
        return response.json()
    }).then(function (resultado) {
        return tabla(resultado)
    }).catch(function (error){
        console.log(error)
    })

}

function tabla(resultado) {
    let tabla = document.createElement('table')
    let cabeceras = document.createElement('thead')
    let header = ['Identificador', 'Nombre', 'Descripción', 'Clase']
    let tr = document.createElement('tr')
}

function validaciones() {

    if (validarDestinatario() && validarEtiqueta()) {
        mostrarCookie();
    }

   
    
}

function validarDestinatario() {
    let codCliente = document.getElementById("destinatario").value
    let divCodCliente = document.getElementById("error_dest")

    const regExt = /([#]{1})([0-9]{3})([A]{1})([M]{1})/

    if (!regExt.test(codCliente)) {

        divCodCliente.innerHTML = "Identificador no válido"
        divCodCliente.style.color = 'red'

    } else {
        divCodCliente.innerHTML = ""
        return true
    }


}

function validarEtiqueta() {
    let etiqueta = document.getElementById("etiqueta").value
    let divEtiqueta = document.getElementById("error_etiqueta")

    const regExt = /([A-Za-z0-9-]{27})/

    if (!regExt.test(etiqueta)) {

        divEtiqueta.innerHTML = "Identificador no válido"
        divEtiqueta.style.color = 'red'

    } else {
        divEtiqueta.innerHTML = ""
        return true
    }

}

function crearCookie() {

    let checkbox = document.getElementById("entrega").checked
    let codCliente = document.getElementById("destinatario").value
    let etiqueta = document.getElementById("etiqueta").value
    let edicion = document.getElementById("edicion").value

    console.log(etiqueta + codCliente)
    console.log(checkbox)

    let valorCookie = codCliente + "-" + etiqueta + "-" + edicion + "-" + checkbox 

    var d = new Date()
    d.setTime(d.getTime() + (1*24*60*60*1000))
    var expiracion = "expires" + d.toUTCString()

    document.cookie = "cookie" + "=" + valorCookie + ";" + expiracion + ";path=/"

}

function verCookie() {
    
    let nombre = "cookie="

    let decodedCookie = decodeURIComponent(document.cookie)

    let ca = decodedCookie.split(";")

    for (var i = 0; i < ca.length; i++) {
        var c = ca[i]

        while (c.charAt(0) == ' ') {
            c = c.substring(1)
        }

        if (c.indexOf(nombre) == 0) {
            return c.substring(nombre.length, c.length)
        }

    }

    return ""

}

let divCookie = document.getElementById("cookiis")

function mostrarCookie() {
    crearCookie()
    

    divCookie.innerHTML = "IdColeccion = " + verCookie()
}
