function validar() {

    var vacuna = document.getElementById("vacuna")
    var vac_inco = false

    if (vacuna=="0") {
        vac_inco = true
        alert("Tienes que elegir un fabricante de la vacuna")

    }



}

function ResetearForm() {
    document.getElementById("formulario").reset
}