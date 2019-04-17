
var campoFiltro = document.querySelector("#filtrar-tabela");

// Numa função que trata um evento (um Event Listener), o this é o elemento que sofreu o evento.
// Já no forEach, o this é outra coisa: é o objeto global Window, nesse caso específico.
// Então, já que você quer o value do elemento <input> em que houve o evento input, guarde o valor em uma variável!
campoFiltro.addEventListener("input", function()
{
    var pacientes = document.querySelectorAll(".paciente");

    // Como realizar uma busca, escondendo todos os elementos e mostrando apenas aqueles que nos interessam
    if(this.value.length > 0)
    {
        pacientes.forEach(function(paciente)
        {
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;    
    
            // Como buscar por apenas um pedaço de uma palavra com as Expressões Regulares em Javascript
            var expressao = new RegExp(campoFiltro.value, "i");
    
            if(!expressao.test(nome))
                paciente.classList.add("invisivel");
            else
                paciente.classList.remove("invisivel");
        });
    } else
    {
        pacientes.forEach(function(paciente)
        {
            paciente.classList.remove("invisivel");
        });
    }
});