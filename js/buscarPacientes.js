var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function()
{
    console.log("Buscando pacientes...");

    // É responsável por fazer requisições HTTP assíncronas com Javascript
    var xhr = new XMLHttpRequest();

    // Configura nossa requisição para dizer para qual servidor queremos enviá-la e também qual método HTTP devemos usar.
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function()
    {
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);
        // console.log(typeof pacientes);

        pacientes.forEach(function(paciente)
        {
            adicionaPacienteNaTabela(paciente);
        });
    });

    xhr.send();
});
