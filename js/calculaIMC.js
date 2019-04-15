
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

    var validWeight = validaPeso(weight);
    var validHeight = validaAltura(height);

    if(!validWeight)
    {
        console.log("Invalid Weight!")
        validWeight = false;
        tbIMC.textContent = "Invalid weight!"
        pacientes[i].classList.add("paciente-invalido");
    }

    if (!validHeight) 
    {
        console.log("Invalid Height!")
        validHeight = false;
        tbIMC.textContent = "Invalid Height!"
        pacientes[i].classList.add("paciente-invalido");
    }

    if(validHeight && validWeight)
    {
        var imcFormula = calculaIMC(weight, height);
        
        tbIMC.textContent = imcFormula;
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

function validaPeso(weight)
{
    if(weight >= 0 && weight <= 1000)
    {
        return true;
    } else
    {
        return false;
    }
}

function validaAltura(height)
{
    if(height >= 0 && height <= 3.00)
    {
        return true;
    } else
    {
        return false;
    }
}