var pacientes = document.querySelectorAll(".paciente");

var tabela = document.querySelector("#tabela-pacientes");

/* Aprendemos sobre a delegação, processo possível pelo borbulhamento, com event bubbling. 
   Independentemente de qual elemento clicarmos, o evento sempre vai subindo para a tag pai. 
   Conhecemos também a propriedade do event.target, que possui o parentNode. 
   Eles foram usados no nosso código para a remoção de um paciente na nossa tabela. */
tabela.addEventListener("dblclick", function(event)
{   
    // <tr> -> Paciente 
    //var alvoEvento = event.target;
    //var paiDoAlvo = alvoEvento.parentNode;
    //paiDoAlvo.remove();
   
    event.target.parentNode.classList.add("fadeOut");

    // Aguarda 450 segundos (tempo que colocado para a transição ocorrer) para remover a linha.
    setTimeout(function()
    {   
        event.target.parentNode.remove();   
    }, 450);    
});