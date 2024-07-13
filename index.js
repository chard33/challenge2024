let txt_ent = document.querySelector(".enc-text");
let div_res = document.querySelector(".con-txt");
let div_sin = document.querySelector(".sin-txt");
let txt_res = document.querySelector(".tx_res");
let btn_des = document.querySelector(".btn-dos");

var arr = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat"
};

function copiar(){

    navigator.clipboard.writeText(txt_res.value);
}

function cam_color(){
    txt_ent.classList.remove("red");
}

function val_txtA(){
    
    if(window.event.keyCode == 8 && txt_ent.value.length === 0){
        div_sin.style.display = "initial";
        div_res.style.display = "none";
    }
}

function procesarTexto(accion) {
    if (txt_ent.value.length === 0) {
        txt_ent.classList.add("red");
    } else {
        div_sin.style.display = "none";
        div_res.style.display = "initial";
        btn_des.disabled = false;

        let cadena = txt_ent.value;

        if (accion === 'encriptar') {
            for (var llav in arr) {
                cadena = cadena.replace(new RegExp(llav, "g"), arr[llav]);
            }
        } else if (accion === 'desencriptar') {
            for (var llav in arr) {
                cadena = cadena.replace(new RegExp(arr[llav], "g"), llav);
            }
        }

        txt_res.value = cadena;
    }
}