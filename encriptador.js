/*
`La letra "e" es convertida para "enter"`
    `La letra "i" es convertida para "imes"`
    `La letra "a" es convertida para "ai"`
    `La letra "o" es convertida para "ober"`
    `La letra "u" es convertida para "ufat"`
*/

const entrada = document.getElementById("entrada");
const btnEncriptar = document.querySelector("#btn-encriptar");
const btnDesencriptar = document.querySelector("#btn-desencriptar");
const btnCopiar = document.querySelector("#btn-copiar");


function encriptar() {

    let mensajeNormal = entrada.value.toLowerCase();

    let txtEncriptado = mensajeNormal.replace(/e/igm, "enter");
    txtEncriptado = txtEncriptado.replace(/i/igm, "imes");
    txtEncriptado = txtEncriptado.replace(/a/igm, "ai");
    txtEncriptado = txtEncriptado.replace(/o/igm, "ober");
    txtEncriptado = txtEncriptado.replace(/u/igm, "ufat");

    document.querySelector(".seccion-derecha div").style.background = "none";
    document.getElementById("alerta").style.display = "none";
    document.getElementById("aviso").style.display = "none";
    document.getElementById("mensaje").style.display = "show";
    document.getElementById("mensaje").style.display = "inherit";
    document.querySelector("main").style.height = "100%";
    document.getElementById("entrada").value = "";
    document.getElementById("mensaje").innerHTML = txtEncriptado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";

}

function desencriptar() {

    let mensajeEncriptado = entrada.value.toLowerCase()

    let txtDesencriptado = mensajeEncriptado.replace(/enter/igm, "e");
    txtDesencriptado = txtDesencriptado.replace(/imes/igm, "i");
    txtDesencriptado = txtDesencriptado.replace(/ai/igm, "a");
    txtDesencriptado = txtDesencriptado.replace(/ober/igm, "o");
    txtDesencriptado = txtDesencriptado.replace(/ufat/igm, "u");

    document.querySelector(".seccion-derecha div").style.background = "none";
    document.getElementById("alerta").style.display = "none";
    document.getElementById("aviso").style.display = "none";
    document.getElementById("mensaje").style.display = "show";
    document.getElementById("mensaje").style.display = "inherit";
    document.querySelector("main").style.height = "100%";
    document.getElementById("entrada").value = "";
    document.getElementById("mensaje").innerHTML = txtDesencriptado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";

}


function copiar() {
    navigator.permissions.query({name: "clipboard-write"}).then((result) => {
        if (result.state === "granted" || result.state === "prompt") {
            let txtCopiado = document.querySelector("#mensaje");
            let mensaje = txtCopiado.value;
            navigator.clipboard.writeText(mensaje);
        }
    });
    entrada.focus();
}

btnEncriptar.onclick = encriptar;
btnDesencriptar.onclick = desencriptar;
btnCopiar.onclick = copiar;
