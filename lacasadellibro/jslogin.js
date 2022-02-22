function validar(){
    var usuario;
    var contraseña;
    usuario=document.getElementById("Usuario");
    contraseña=document.getElementById("Contraseña");
    if (usuario.value==""){
        alert("El usuario no ha sido introducido");
        usuario.focus();
    } else if (contraseña.value=="") {
        alert("La contraseña no se ha introducido");
        contraseña.focus
    }
}