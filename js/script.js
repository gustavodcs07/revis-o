function somar(){
    var valor1 = parseFloat(document.getElementById('valor1').value)
    var valor2 = parseFloat(document.getElementById('valor2').value)
    resultado = valor1 + valor2;
    document.getElementById('resultado').innerHTML = `é: ${resultado}`;
}

function subtrair(){
    var valor1 = parseFloat(document.getElementById('valor1').value)
    var valor2 = parseFloat(document.getElementById('valor2').value)
    resultado = valor1 - valor2;
    document.getElementById('resultado').innerHTML = `é: ${resultado}`;
}

function multiplicar(){
    var valor1 = parseFloat(document.getElementById('valor1').value)
    var valor2 = parseFloat(document.getElementById('valor2').value)
    resultado = valor1 * valor2;
    document.getElementById('resultado').innerHTML = `é: ${resultado}`;
}

function dividir(){
    var valor1 = parseFloat(document.getElementById('valor1').value)
    var valor2 = parseFloat(document.getElementById('valor2').value)
    resultado = valor1 / valor2;
    document.getElementById('resultado').innerHTML = `é: ${resultado}`;
}
