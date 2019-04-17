{/* <textarea id="corpo-postagem" cols="40" rows="5"></textarea>
<p>Caracteres: <span id="numero-caracteres">0</span> caracteres.</p>

<script src="js/contador.js"></script> */}

var campoPostagem = document.querySelector("#corpo-postagem");
campoPostagem.addEventListener("input", atualizaCaracteres);

function atualizaCaracteres() 
{
    var caracteres = campoPostagem.value.length;

    var contador = document.querySelector("#numero-caracteres");
    contador.innerHTML = caracteres;
}