function validar() {
    var result_val_email = validar_email();
    var result_val_contrasena = validar_contrasena();
    var result_val_direcc = validar_direcc();
    return (result_val_email && result_val_passw && result_val_direcc);
}

function validar_fto_email(email) {
    var idx_arroba = email.indexOf("@");
    if (idx_arroba < 1) {
        return false;
    } else {
        var idx_punto = email.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == email.length - 1) {
            return false;
        }        
        return true;
    }
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validar_fto_email(email)) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato del email no es valido";
            div.className = "text-danger";
            return false;
        }
    } else {
        div.innerHTML = "El email no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}

function validar_password() {
    var passw = document.getElementById("contrasena").value;
    var div = document.getElementById("msj-contrasena");
    if  (passw.length > 6) {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "La contraseña debe ser de al menos 3 a 6 caracteres";
        div.className = "text-danger";
        return false;
    }
}

function validar_direcc() {
    return true;
}

function validar() {
    var result_val_cod
}