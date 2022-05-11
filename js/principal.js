var titulo = document.querySelector(".titulo");
var novoTitulo = "Aparecida Nutricionista"
titulo.textContent = novoTitulo;
document.title = novoTitulo;

var trPaciente = document.querySelector("#primeiro-paciente");

var peso = trPaciente.querySelector(".info-peso").textContent;
// var peso = tdPeso.textContent;

var altura = trPaciente.querySelector(".info-altura").textContent;
// var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
var tdImc = trPaciente.querySelector(".info-imc");
tdImc.textContent = imc;

console.log(imc);