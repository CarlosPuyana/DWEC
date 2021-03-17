var letras = [
    "T",
    "R",
    "W",
    "A",
    "G",
    "M",
    "Y",
    "F",
    "P",
    "D",
    "X",
    "B",
    "N",
    "J",
    "Z",
    "S",
    "Q",
    "V",
    "H",
    "L",
    "C",
    "K",
    "E",
    "T",
    ];

    var dninum = prompt("Dime su DNI (sin letra)")
    var dnilet = prompt("Dime la letra de su DNI")

    if (dninum>0 && dninum<99999999) {
        var resto = dninum%23

        if (dnilet == letras[resto]) {
            alert("dni valido")
        } else {
            alert("letra incorrecta")
        }

    } else {
        alert("numero no valido")
    }

    console.log(dninum + (" ") + dnilet +(" ") + resto +(" ") + letras[resto])