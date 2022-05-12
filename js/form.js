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