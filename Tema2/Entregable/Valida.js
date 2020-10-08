function Valida() {
    var numero
    var mayus
    var letra
    var expresion = /^\d{8}[a-zA-Z]$/
    var dni = document.getElementById("dni").value
    
    if(expresion.test(dni) == true){
        numero = dni.substr(0,dni.length-1);
        mayus = dni.substr(dni.length-1,1);
        numero = numero % 23;
        letra='TRWAGMYFPDXBNJZSQVHLCKET';
        letra=letra.substring(numero,numero+1);
        if (letra!=mayus.toUpperCase()) {
        alert('Dni erroneo, la letra del NIF no se corresponde');
        }else{
        alert('Dni correcto');
        }
    }else{
        alert('Dni erroneo, formato no válido');
    }

    }