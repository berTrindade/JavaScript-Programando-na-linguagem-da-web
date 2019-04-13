
var title = document.querySelector(".title");
title.textContent = "Aparecida Nutricionista";

var primeiro = document.querySelector("#primeiro");

var tdWeight = primeiro.querySelector(".info-peso").textContent;
var weight = tdWeight

//console.log(weight);

var tdHeight = primeiro.querySelector(".info-altura").textContent;
var height = tdHeight;

var tbIMC = primeiro.querySelector(".info-imc");

var valid = true;

if(weight <= 0 || weight >= 1000)
{
    console.log("Invalid Weight!")
    valid = false;
    tbIMC.textContent = "Invalid weight!"
}

if (height <= 0 || height >= 3.00) 
{
    console.log("Invalid Height!")
    valid = false;
    tbIMC.textContent = "Invalid Height!"
}

//console.log(height);

if(valid)
{
    var imcFormula = weight / (height * height);

    //console.log(imcFormula);
    
    tbIMC.textContent = imcFormula;
} else
{
    tbIMC.textContent = "Both were Invalid"
}

