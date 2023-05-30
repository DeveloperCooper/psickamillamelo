var elemento = document.querySelector(".alternative-text");
var radios = document.querySelectorAll('input[type="radio"][name="alternative"]');
var intervalId;

function exibirTexto() {
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            elemento.innerHTML = radios[i].nextElementSibling.innerHTML;
            elemento.style.display = "block";
        } else {
            radios[i].nextElementSibling.style.display = "none";
        }
    }
}

function iniciarAlternanciaAutomatica() {
    intervalId = setInterval(function () {
        for (var i = 0; i < radios.length; i++) {
            if (radios[i].checked) {
                radios[(i + 1) % radios.length].checked = true;
                exibirTexto();
                break;
            }
        }
    }, 3000);
}

function pararAlternanciaAutomatica() {
    clearInterval(intervalId);
}

for (var i = 0; i < radios.length; i++) {
    radios[i].addEventListener("change", exibirTexto);
}

exibirTexto();

iniciarAlternanciaAutomatica();

var depositions = document.querySelector("#depositions");
depositions.addEventListener("mouseenter", pararAlternanciaAutomatica);
depositions.addEventListener("mouseleave", iniciarAlternanciaAutomatica);
