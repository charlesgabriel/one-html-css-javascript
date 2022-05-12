var botaoAdicionar = query(document, "#adicionar-paciente");
botaoAdicionar.addEventListener("click", function(event) {
    event.preventDefault();
    var form = query(document, "#form-adiciona");
    var paciente = obtemPacienteForm(form);
    var pacienteTr = montarTr(paciente);
    var tabela = query(document, "#tabela-pacientes");
    tabela.appendChild(pacienteTr);
    form.reset();
});

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