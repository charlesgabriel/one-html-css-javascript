function create(element) {
    return document.createElement(element);
}
function query(item, id) {
    return item.querySelector(id);
}
function queryAll(id) {
    return document.querySelectorAll(id);
}
function queryContent(item, id) {
    return item.querySelector(id).textContent;
}

var titulo = query(document, ".titulo");
var novoTitulo = "Aparecida Nutricionista"
titulo.textContent = novoTitulo;
document.title = novoTitulo;

var pacientes = queryAll(".paciente");

for (let i = 0; i < pacientes.length; i++) {
    const paciente = pacientes[i];
    var peso = queryContent(paciente, ".info-peso");
    var altura = queryContent(paciente, ".info-altura");
    var tdImc = query(paciente, ".info-imc");
    
    var pesoValido = true;
    var alturaValida = true;
    
    if(peso <= 0 || peso >= 600) {
        console.log("Peso inválido!");
        pesoValido = false;
        tdImc.textContent = "Peso inválido!";
        paciente.classList.add("paciente-invalido");
    }
    if(altura <= 0 || altura >= 3.00) {
        console.log("Altura inválida!");
        alturaValida = false;
        tdImc.textContent = "Altura inválida!";
        paciente.classList.add("paciente-invalido");
    }
    if(pesoValido && alturaValida) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }
}