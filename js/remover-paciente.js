var tabela = query("#tabela-pacientes");
tabela.addEventListener("dblclick", function(event) {
    if (event.target.tagName == 'TD') {
        var alvoEvento = event.target;
        var paiDoAlvo = alvoEvento.parentNode;
        paiDoAlvo.classList.add("fadeOut");
        setTimeout(function() {
            paiDoAlvo.remove();
        }, 500);
    }
});