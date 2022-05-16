var campoFiltrar = query("#filtrar-tabela");

campoFiltrar.addEventListener("input", function() {
    var pacientes = queryAll(".paciente");
    if(this.value.length > 0) {
        for (let i = 0; i < pacientes.length; i++) {
            var paciente = pacientes[i];
            var nome = queryContent(".info-nome", paciente);
            var expressao = new RegExp(this.value, "i");
            if(expressao.test(nome)) {
                paciente.classList.remove("invisivel");
            } else {
                paciente.classList.add("invisivel");
            }
        }
    } else {
        pacientes.forEach(function(paciente) {
            paciente.classList.remove("invisivel");
        });
    }
});