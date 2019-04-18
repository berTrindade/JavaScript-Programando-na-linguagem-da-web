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
        // Se a requisição retornar qualquer erro, devemos remover a classe invisivel do <span>, 
        // tornando a mensagem de erro visível para o usuário. Remova a classe invisivel caso o código não seja 200, 
        // e volte a adicionar caso a requisição não dê nenhum erro

        var erroAjax = document.querySelector("#erro-ajax");

        if(xhr.status == 200)
        {
            erroAjax.classList.add("invisivel");

            var resposta = xhr.responseText;

            // Converte JSON para um objeto Javascript 
            var pacientes = JSON.parse(resposta);
            
            // console.log(typeof pacientes);
    
            pacientes.forEach(function(paciente)
            {
                adicionaPacienteNaTabela(paciente);
            });
        } else
        {
            console.log(xhr.status);
            console.log(xhr.responseText);

            erroAjax.classList.remove("invisivel");
        }
    });

    xhr.send();
});
