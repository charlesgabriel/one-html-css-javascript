var titulo = query(".titulo");
var novoTitulo = "Aparecida Nutricionista"
titulo.textContent = novoTitulo;
document.title = novoTitulo;

var pacientes = queryAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    var peso = queryContent(".info-peso", paciente);
    var altura = queryContent(".info-altura", paciente);
    var tdImc = query(".info-imc", paciente);
    
    var pesoValido = analisarPeso(peso);
    var alturaValida = analisarAltura(altura);

    pesoValido = validarDado(paciente, pesoValido, "Peso");
    alturaValida = validarDado(paciente, alturaValida, "Altura");

    if(pesoValido && alturaValida) {
        var imc = calcularImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function analisarPeso(peso) {
    if(peso >= 0 && peso <= 600) {
        return true;
    } else {
        return false;
    }
}

function analisarAltura(altura) {
    if(altura >= 0 && altura <= 3.0) {
        return true;
    } else {
        return false;
    }
}

function validarDado(paciente, confirmar, dado) {
    if(!confirmar) {
        console.log(dado + " inválido!");
        tdImc.textContent = dado + " inválido!";
        paciente.classList.add("paciente-invalido");
        return false;
    } else {
        return true;
    }
}

function calcularImc(peso, altura) {
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}