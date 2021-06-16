let operacion, res
var num1, num2

document.querySelector('#multiplicacion').addEventListener('click', () =>{
    operacion = '*'
})

document.querySelector('#dividir').addEventListener('click', () =>{
    operacion = '/';
})

document.querySelector('#sumar').addEventListener('click', () =>{
    operacion = '+'
})

document.querySelector('#restar').addEventListener('click', () =>{
    operacion = '-'
})



document.querySelector('#calcular').addEventListener('click', () =>{
    num1 = parseInt(document.querySelector('#numero1').value)
    num2 = parseInt(document.querySelector('#numero2').value)
    if(operacion == '+'){
        res = num1 + num2;
    }else if(operacion == '-'){
        res = num1 - num2;
    }else if(operacion == '*'){
        res = num1 * num2;
    }else if(operacion == '/'){
        res = num1 / num2
    }
    document.querySelector('#resultado').innerHTML = res;
});

function borrar(){
    document.querySelector('#numero1').value = 0;
    document.querySelector('#numero2').value = 0;
    document.querySelector('#resultado').innerHTML = 0;
}borrar();