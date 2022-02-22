

function compararPass() {
    if(getAge(document.getElementById("edad").value) < 18){
        alert("Debes ser mayor de 18 años");
        document.getElementById("error").style.display="block";
        document.getElementById("error").innerText = "La edad es incorrecta.";
        document.getElementById("edad").value="";
        return false;
    }
    var p1 = document.getElementById("pass").value;
    var p2 = document.getElementById("pass2").value;
    if (p1 != p2) {
        alert("Las passwords deben de coincidir");
        document.getElementById("error").style.display="block";
        document.getElementById("pass").value="";
        document.getElementById("pass2").value="";
        document.getElementById("error").innerText = "Hay un error con la contraseña.";
        return false;
      } else {
        return true; 
      }
}

function tomalaInfo() {
  alert('Para poder iniciar sesión es necesario que antes te registres. Los datos los guardaremos en una caja de zapatos ');
}

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
  }
  return age;
}
/*function relleno(){
    if (p1.length == 0 || p2.length == 0) {
    alert("De");
    return false;
  }
}*/