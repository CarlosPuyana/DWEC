
function mostrarConte() {
    fecha = new Date()
    hora = fecha.getHours()
    dia = fecha.getDay()

    /*document.write(fecha + "<br>")
    document.write(hora+ "<br>")
    document.write(dia+ "<br>") */

    if ((hora>=9 && hora<=14) && (dia>0 && dia<6)) {
        document.write("Pagina abierta")
    } else {
        document.write("Pagina cerrada")
    }

}