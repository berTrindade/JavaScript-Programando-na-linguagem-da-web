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

    console.log(paciente);

    // Cria <tr> e <td> 
    var pacienteTr = montarTr(paciente);

    // Adicionando paciente na tabela
    var tabela = document.querySelector("#tabela-pacientes");
    
    tabela.appendChild(pacienteTr);

    form.reset();
});

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