var botaoAdicionar = query(document, "#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = query(document, "#form-adiciona");
    var paciente = obtemPacienteForm(form);

    var erros = validarPaciente(paciente);
    if(erros.length > 0) {
        exibirMensagemErro(erros);
        return;
    }
    var pacienteTr = montarTr(paciente);
    var tabela = query(document, "#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
    limparErros();
});

var ul = query(document, "#mensagem-erro");

function limparErros() {
    ul.innerHTML = "";
}

function exibirMensagemErro(erros) {
    limparErros();
    erros.forEach(function(erro) {
        var li = create("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function obtemPacienteForm(form) {
    var paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calcularImc(
            form.peso.value, 
            form.altura.value,
        ),
    }
    return paciente;
}

function montarTr(paciente) {
    var pacienteTr = create("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montarTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montarTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montarTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montarTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montarTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montarTd(dado, estilo) {
    var td = create("td");
    td.classList.add(estilo);
    td.textContent = dado;
    return td;
}

function validarPaciente(paciente) {
    var erros = [];
    if(paciente.nome.length == 0) {
        erros.push('O valor do campo "Nome" não pode ser em branco!');
    }
    if(paciente.peso.length == 0) {
        erros.push('O valor do campo "Peso" não pode ser em branco!');
    }
    if(!analisarPeso(paciente.peso)) {
        erros.push('O valor do campo "Peso" é inválido!');
    }
    if(paciente.altura.length == 0) {
        erros.push('O valor do campo "Altura" não pode ser em branco!');
    }
    if(!analisarAltura(paciente.altura)) {
        erros.push('O valor do campo "Altura" é inválido!');
    }
    if(paciente.gordura.length ==0) {
        erros.push('O valor do campo "% de Gordura" não pode ser em branco!');
    }
    return erros;
}