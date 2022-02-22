function validacion (){

  let tel = document.getElementById('telefono').value;
  if( !(/^\d{9}$/.test(tel)) ) {
    alert("Hola");
  }

  let email = document.getElementById('email').value;
  if (/^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/.test(email)){
    alert("La dirección de email es correcta");
  }else{
    alert("La dirección de email es incorrecta");
  }

}