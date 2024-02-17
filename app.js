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
    limpiarCaja();
    document.getElementById('salida').value = textoEncriptado;
}

function revertir(){
    obtenerInput();
    limpiarCaja();
    desencriptar(textoInicial);
    document.getElementById('salida').value = textoDecript;
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
    limpiarCaja();
    return textoEncriptado;
}

function desencriptar(textoInicial){
    for (let i = 0; i < textoInicial.length; i++) {
        if (textoInicial.slice(i, i + 2) === "ai") {
            textoDecript +="a";
            i += 1;
        } else if(textoInicial.slice(i, i + 5) === "enter"){
            textoDecript += "e";
            i += 4
        } else if(textoInicial.slice(i, i + 4) === "imes"){
            textoDecript += "i";
            i += 3
        } else if(textoInicial.slice(i, i + 4) === "ober"){
            textoDecript += "o";
            i += 3
        } else if(textoInicial.slice(i, i + 4) === "ufas"){
            textoDecript += "u";
            i += 3
        } else {
            textoDecript += textoInicial[i];
        }
    }
    return textoDecript;
}

function limpiarCaja(){
    document.getElementById('salida').value = '';
}