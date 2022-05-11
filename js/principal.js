var titulo = document.querySelector(".titulo");
var novoTitulo = "Aparecida Nutricionista"
titulo.textContent = novoTitulo;
document.title = novoTitulo;

var trPaciente = document.querySelector("#primeiro-paciente");

var tdPeso = trPaciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = trPaciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var imc = peso / (altura * altura);
var tdImc = trPaciente.querySelector(".info-imc");
tdImc.textContent = imc;

console.log(imc);