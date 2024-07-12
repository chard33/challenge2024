let txt_ent = document.querySelector(".enc-text");
let div_res = document.querySelector(".con-txt");
let div_sin = document.querySelector(".sin-txt");
let txt_res = document.querySelector(".tx_res");
let btn_des = document.querySelector(".btn-dos");

function encriptar(){

    validar("encriptar")
}

function desencriptar(){

    validar("desencriptar");
}

function validar(accion){
    if (txt_ent.value.length === 0) {
        txt_ent.classList.add("red");
    } else {

        div_sin.style.display = "none";

        if (accion === 'encriptar') {

            div_res.style.display = "initial";
            txt_res.value = txt_ent.value;
            btn_des.disabled = false;
            
        } else if (accion === 'desencriptar') {
            
            txt_res.value = txt_ent.value;
        }
    }
}

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