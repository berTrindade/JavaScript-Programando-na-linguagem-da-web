/*
Quando colocamos o parenteses estamos invocando ou seja chamando a função,
sendo que o addEventListener e quem deve chamar a função e não a gente, 
esse e um dos motivos também alem do que você mencionou de não por o () quando passar por parâmetro a função ao addEventListener,respondendo sua pergunta agora,quando queremos que um evento chame a função e não a gente devemos passar sem o ()
*/
botao.addEventListener("click", function(event)
{
    event.preventDefault();
    
    var form = document.querySelector("#form-adiciona");

    // Extraindo informacoes do formulario
    var paciente = obtemPacienteFormulario(form);

    var erros = validaPaciente(paciente);

    console.log(erros);

    if(erros.length > 0)
    {
        exibeMensagemDeErro(erros);
        return;
    }

    adicionaPacienteNaTabela(paciente);

    /*
     Com a propriedade innerHTML, podemos editar obter o conteúdo HTML (HTML interno) de um elemento.
     O seu retorno será todo o conteúdo HTML, tanto tags, atributos, classes, etc, no formato de uma String.
     */
    document.querySelector("#mensagens-erro").innerHTML = "";

    form.reset();
});

function adicionaPacienteNaTabela(paciente)
{
    // Cria <tr> e <td> 
    var pacienteTr = montarTr(paciente);

    // Adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);
}

function exibeMensagemDeErro(erros)
{
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";

    erros.forEach(function(erro)
    {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });

}

function obtemPacienteFormulario(form)
{
    var paciente = 
    {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaIMC(form.peso.value, form.altura.value)
    }

    return paciente;
}

function montarTr(paciente)
{
    var pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
}

function montaTd(dado, classe)
{
    var td = document.createElement("td");

    td.textContent = dado;
    td.classList.add(classe);

    return td;
}

function validaPaciente(paciente)
{
    var erros = [];

    if(paciente.nome.length == 0)
        erros.push("O nome não pode ser em branco!");

    if(!validaPeso(paciente.peso))
        erros.push("O peso é inválido!");
    
    if(!validaAltura(paciente.altura))
        erros.push("A altura é inválida!");

    if(paciente.gordura.length == 0)
        erros.push("A gordura não pode ser em branco!");

    if(paciente.peso.length == 0)
        erros.push("O peso não pode ser em branco!");
    
    if(paciente.altura.length == 0)
        erros.push("A altura não pode ser em branco!");

    return erros;
}