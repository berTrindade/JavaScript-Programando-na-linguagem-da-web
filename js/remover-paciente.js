var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event)
{   
    // <tr> -> Paciente 
    //var alvoEvento = event.target;
    //var paiDoAlvo = alvoEvento.parentNode;
    //paiDoAlvo.remove();

    event.target.parentNode.remove();
});