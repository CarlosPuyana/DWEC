
var tirada = 0
var error_ano = "Error en el año" 
var error_hab = "Error en la habilidad"
var nada = ""
var divaso = document.getElementById("errores")
divaso.innerHTML = ""

function validarTodas() {
    validarAno();
    validarHab();
    validarTirada();
    validaPassword();

    tirada = Math.floor(Math.random() * (6-1) + 1)

    document.cookie = "Intentos de envio del formulario: " + tirada
    document.getElementById("tiradas").innerHTML = document.cookie
}


function validarAno() {
    var ano = document.getElementById("ano").value

    if (ano >= 700 && ano <= 8000) {
        console.log("es valido")

        var div = document.getElementById("errores")
        div.innerHTML = ""

        ano = document.getElementById("ano").style.borderColor = "green"
    } else {
        console.log("no es valido")
        ano = document.getElementById("ano").style.borderColor = "red"

        
        var div = document.getElementById("errores")
        div.innerHTML = div.innerHTML + error_ano

    }

}

function validarHab() {
    var hab = document.getElementById("habilidad").value

    console.log(hab)

    if (hab === "M" || hab === "WS" || hab === "BS" || hab === "S" || hab === "T" || hab === "W" || hab === "A" || hab === "Ld" || hab === "Sv") {

        console.log("Valido")
        hab = document.getElementById("habilidad").style.borderColor = "green"

        var div = document.getElementById("errores")
        div.innerHTML = ""

    } else {
        console.log("No valido")
        hab = document.getElementById("habilidad").style.borderColor = "red"

        var div = document.getElementById("errores")
        div.innerHTML = div.innerHTML + error_hab

    }

}

function validarTirada() {
    var tirada = document.getElementById("tirada").value

    const regexT = /([F]{1})([x2|>|=|<]{0,1})([R]{1})([00-99]{1})/
    if(regexT.test(tirada)){
        tirada = document.getElementById('tirada').style.borderColor = "green";
    }else{
        tirada = document.getElementById('tirada').style.borderColor = "red";
        
        var div = document.getElementById("errores")
        div.innerHTML = div.innerHTML + "Error en la tirada"

    }


}


function validaPassword() {
    let pwd = document.getElementById("pwd").value

    const regexT = /([A-Z]{2})([<|>|?|¿|=])([a-z]{8})([#])([0-9]{2})/


    if (regexT.test(pwd)) {
        prueba = document.getElementById('pwd').style.borderColor = "green";

        var div = document.getElementById("errores")
        div.innerHTML = ""

    } else {
        prueba = document.getElementById('pwd').style.borderColor = "red";
    
        
        var div = document.getElementById("errores")
        
        div.innerHTML = div.innerHTML + "Error en la contraseña"

    }

}


function ResetearForm() {
    document.getElementById("formulario").reset()
}

