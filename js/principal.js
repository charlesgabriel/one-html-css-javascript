var titulo = document.querySelector(".titulo");
var novoTitulo = "Aparecida Nutricionista"
titulo.textContent = novoTitulo;
document.title = novoTitulo;

var trPaciente = document.querySelector("#primeiro-paciente");

var peso = trPaciente.querySelector(".info-peso").textContent;
// var peso = tdPeso.textContent;

var altura = trPaciente.querySelector(".info-altura").textContent;
// var altura = tdAltura.textContent;

var tdImc = trPaciente.querySelector(".info-imc");

var pesoValido = true;
var alturaValida = true;

if(peso <= 0 || peso >= 600) {
    console.log("Peso inválido!");
    pesoValido = false;
    tdImc.textContent = "Peso inválido!";
}
if(altura <= 0 || altura >= 3.00) {
    console.log("Altura inválida!");
    alturaValida = false;
    tdImc.textContent = "Altura inválida!";
}
if(pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}