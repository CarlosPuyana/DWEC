var lista = document.getElementsByTagName("LI");

for (let i = 0; i < lista.length; i++) {
    let span = document.createElement("SPAN");
    let texto = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(texto);
    lista[i].appendChild(span);
}

var cerrar = document.getElementsByClassName("close");

for (let i = 0; i < cerrar.length; i++) {
    cerrar[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}
var listaTareas

function anadirLista() {
    let li = document.createElement("li");
    let inputazo = document.getElementById("inputazo").value;
    let t = document.createTextNode(inputazo);
    li.appendChild(t);
    if (inputazo === '') {
        console.log("no se escribio nada");
    } else {
        document.getElementById("UL").appendChild(li).className = "sii";
        
    }
    document.getElementById("inputazo").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < cerrar.length; i++) {
        cerrar[i].onclick = function() {
        let div = this.parentElement;
        div.style.display = "none";
        }
    }

    var listaTareas = document.getElementById("sii")
    
    console.log(listaTareas)
    console.log("aqui llego")
    setCookie("tarea", listaTareas, 7)

}


function setCookie(nombre, value, dias) {
    var d = new Date()
    d.setTime(d.getTime()+dias*24*60*60*1000)
    let expiracion = "expires="+d.toUTCString()

    var curCookie = nombre + "=" + value + "; " + expiracion

    document.cookie = curCookie

    var x = document.cookie
    console.log(x)

}

var x = document.cookie
console.log(x)