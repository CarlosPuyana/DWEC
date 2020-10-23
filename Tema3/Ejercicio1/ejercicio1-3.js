// Ejercicio 3 - Date - Carlos Puyana Paraiso

function Formato() {

    let formato = document.getElementById("formato").value // Cogemos el valor de que ha elegido
    let fecha = new Date()

    // Declaramos los formatos posibles
    let for1 = "01/01/2001"
    let for2 = "Sunday, January 1, 2001"
    let for3 = "Domingo, 1 de Enero de 2001"

    //alert(formato)

    //Declaramos los dias, meses y año
    let dia = fecha.getDate()
    let semana = fecha.getDay()
    let diaExacto
    let mes = fecha.getMonth() + 1
    let mesExacto
    let ano = fecha.getFullYear()

    if (formato == for1) { // Si el formato es como el primero, simple:
        alert(dia + "/" + mes + "/" + ano)
    } else if (formato == for2) { // Si es como el segundo
        switch (semana) { // Un switch y segun el numero es un dia y/o mes
            case 0:
                diaExacto = "Sunday"
                break;
            case 1:
                diaExacto = "Monday"
                break;
            case 2:
                diaExacto = "Tuesday"
                break;
            case 3:
                diaExacto = "Wednesday"
                break;
            case 4:
                diaExacto = "Thursday"
                break;
            case 5:
                diaExacto = "Friday"
                break;
            case 6:
                diaExacto = "Saturday"
                break;
        }

        switch (mes) {
            case 0:
                mesExacto = "January"
                break;
            case 1:
                mesExacto = "February"
                break;
            case 2:
                mesExacto = "March"
                break;
            case 3:
                mesExacto = "April"
                break;
            case 4:
                mesExacto = "May"
                break;
            case 5:
                mesExacto = "June"
                break;
            case 6:
                mesExacto = "July"
                break;
            case 7:
                mesExacto = "August"
                break;
            case 8:
                mesExacto = "September"
                break;
            case 9:
                mesExacto = "October"
                break;
            case 10:
                mesExacto = "November"
                break;
            case 11:
                mesExacto = "December"
                break;
        }

        alert(diaExacto + ", " + mesExacto + " " + dia + ", " + ano) // Lo mostramos
    } else if (formato == for3) { // Si es como el tercer formato
        switch (semana) { // Pues lo mismo que en el segundo formato, mucho texto
            case 0:
                diaExacto = "Domingo"
                break;
            case 1:
                diaExacto = "Lunes"
                break;
            case 2:
                diaExacto = "Martes"
                break;
            case 3:
                diaExacto = "Miercoles"
                break;
            case 4:
                diaExacto = "Jueves"
                break;
            case 5:
                diaExacto = "Viernes"
                break;
            case 6:
                diaExacto = "Sabado"
                break;
        }

        switch (mes) {
            case 0:
                mesExacto = "Enero"
                break;
            case 1:
                mesExacto = "Febrero"
                break;
            case 2:
                mesExacto = "Marzo"
                break;
            case 3:
                mesExacto = "Abril"
                break;
            case 4:
                mesExacto = "Mayo"
                break;
            case 5:
                mesExacto = "Junio"
                break;
            case 6:
                mesExacto = "Julio"
                break;
            case 7:
                mesExacto = "Agosto"
                break;
            case 8:
                mesExacto = "Septiembre"
                break;
            case 9:
                mesExacto = "Octubre"
                break;
            case 10:
                mesExacto = "Noviembre"
                break;
            case 11:
                mesExacto = "Diciembre"
                break;
        }

        alert(diaExacto + ", " + dia + " de " + mesExacto + " de " + ano) // Lo mostramos
    }


}