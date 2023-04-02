const textArea = document.querySelector(".text__area");
const mensaje = document.querySelector(".mensaje");
const texto1 = document.querySelector(".texto1");
const texto2 = document.querySelector(".texto2");
const btnCopiar = document.querySelector(".btn__copiar"); //esto lo agregué


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


function btnEncriptar(){

    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    texto1.style.display = "none";
    texto2.style.display = "none";
    /*btnCopiar.classList.remove("ocultar");*/
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    /*btnCopiar.classList.remove("ocultar");*/
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for (let i =0; i< matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
           stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]) 
        }
    }
    return stringEncriptada
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for (let i =0; i< matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]) 
        }
    }
    return stringDesencriptada
}

function copiar(){
    navigator.clipboard.writeText(mensaje.value);
    textArea.focus ();
    mensaje.value = "";
    //lo que sigue no funciona
    mensaje.style.backgroundImage = url(imagenes/muneco.png);
    texto1.style.display = "block";
    texto2.style.display = "block";
}



/*if (frase.length!=0) {
    if (/[^a-zñ ]/.test(frase)) {
        document.getElementById("inf-corri").style.color="red"; //esto es otra cosa no prestes atención 
       swal("No se permiten Mayusculas, ni caracteres especiales","","error"); //esto es una alerta
    }

       else{
        document.getElementById("inf-corri").style.color="black"; 
       document.getElementById("mostrar").innerHTML=frase ;
       aparecer();
    }}*/