function queryAll(id) {
    return document.querySelectorAll(id);
}
function query(item, id) {
    return item.querySelector(id);
}
function queryContent(item, id) {
    return item.querySelector(id).textContent;
}
function create(element) {
    return document.createElement(element);
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

var botaoAdicionar = query(document, "#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = query(document, "#form-adiciona");
    var nome = form.nome.value;
    var peso = form.peso.value;
    var altura = form.altura.value;
    var gordura = form.gordura.value;

    var pacienteTr = create("tr");
    var nomeTd = create("td");
    var pesoTd = create("td");
    var alturaTd = create("td");
    var gorduraTd = create("td");
    var imcTd = create("td");

    nomeTd.textContent = nome;
    pesoTd.textContent = peso;
    alturaTd.textContent = altura;
    gorduraTd.textContent = gordura;
    imcTd.textContent = 0;

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = query(document, "#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});