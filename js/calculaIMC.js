
var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++)
{    
    //console.log(pacientes[i].classList);

    var tdWeight = pacientes[i].querySelector(".info-peso").textContent;
    var weight = tdWeight

    //console.log(weight);

    var tdHeight = pacientes[i].querySelector(".info-altura").textContent;
    var height = tdHeight;

    var tbIMC = pacientes[i].querySelector(".info-imc");

    var valid = true;

    if(weight <= 0 || weight >= 1000)
    {
        console.log("Invalid Weight!")
        valid = false;
        tbIMC.textContent = "Invalid weight!"
        pacientes[i].classList.add("paciente-invalido");
    }

    if (height <= 0 || height >= 3.00) 
    {
        console.log("Invalid Height!")
        valid = false;
        tbIMC.textContent = "Invalid Height!"
        pacientes[i].classList.add("paciente-invalido");
    }

    //console.log(height);

    if(valid)
    {
        var imcFormula = calculaIMC(weight, height);

        //console.log(imcFormula);
        
        tbIMC.textContent = imcFormula;
    } else
    {
        tbIMC.textContent = "Both were Invalid"
    }
}

title.addEventListener("click", function()
{
    //console.log("This is an anonymous function.");
});

function mostraMensagem()
{
    //console.log("Clicked!");
    //alert("Clicked");
}

var botao = document.querySelector("#adicionar-paciente");

//botao.addEventListener("click", mostraMensagem);

function calculaIMC(weight, height)
{
    var imc = 0;

    imc = weight / (height * height);

    return imc.toFixed(2);
}
