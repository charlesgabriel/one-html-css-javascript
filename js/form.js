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
    imcTd.textContent = calcularImc(peso, altura);

    pacienteTr.appendChild(nomeTd);
    pacienteTr.appendChild(pesoTd);
    pacienteTr.appendChild(alturaTd);
    pacienteTr.appendChild(gorduraTd);
    pacienteTr.appendChild(imcTd);

    var tabela = query(document, "#tabela-pacientes");
    tabela.appendChild(pacienteTr);
});