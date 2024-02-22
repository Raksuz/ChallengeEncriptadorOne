let textoInicial;
let textoEncriptado = '';
var textoSeparado;
let textoDecript = "";
const reemplazos = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

function mostrarText() {
    obtenerInput();
    encriptar(textoInicial);
    limpiarCaja2();
    document.getElementById('salida').value = textoEncriptado;
    limpiarCaja1();
    verificarText();
}

function revertir(){
    obtenerInput();
    desencriptar(textoInicial);
    document.getElementById('salida').value = textoDecript;
    limpiarCaja1();
    verificarText();
}

function obtenerInput(){
    textoInicial = document.getElementById('entrada').value.toLowerCase();
}

function encriptar(textoInicial) {
    for (let i = 0; i < textoInicial.length; i++) {
        let indice = textoInicial[i];
        if (reemplazos[indice]) {
            textoEncriptado += reemplazos[indice];
        } else {
            textoEncriptado += indice;
        }
    }
    limpiarCaja2();
    return textoEncriptado;
}

function desencriptar(textoInicial){
    for (let i = 0; i < textoInicial.length; i++) {
        if (textoInicial.slice(i, i + 2) === "ai") {
            textoDecript +="a";
            i += 1;
        } else if(textoInicial.slice(i, i + 5) === "enter"){
            textoDecript += "e";
            i += 4;
        } else if(textoInicial.slice(i, i + 4) === "imes"){
            textoDecript += "i";
            i += 3;
        } else if(textoInicial.slice(i, i + 4) === "ober"){
            textoDecript += "o";
            i += 3;
        } else if(textoInicial.slice(i, i + 4) === "ufat"){
            textoDecript += "u";
            i += 3;
        } else {
            textoDecript += textoInicial[i];
        }
    }
    return textoDecript;
}

function verificarText(){
    let valor = document.getElementById('salida').value;
    if(valor !== ""){
        document.getElementById('p').innerHTML = "";
        document.getElementById('psub').innerHTML = "";
        document.getElementById('dimg').style.display = "none";
    } else{
        document.getElementById('p').innerHTML = "Ningún mensaje fue encontrado";
        document.getElementById('psub').innerHTML = "Ingresa el texto que desees encriptar o desencriptar";
        document.getElementById('dimg').style.display = "block";
    }
}

function copiText(){
    const textCopiado = document.getElementById('salida');
    textCopiado.select();

    navigator.clipboard.writeText(textCopiado.value).then(() => {

    }).catch(err => {

    });
}

function limpiarCaja2(){
    document.getElementById('salida').value = '';
}

function limpiarCaja1(){
    document.getElementById('entrada').value = '';
}