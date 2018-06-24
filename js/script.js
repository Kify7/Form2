

function Persona(nombre, apellido, password, genero, esCool) {
  this.nombre = nombre;
  this.apellido = apellido;
  this.password = password;
  this.genero = genero;
  this.esCool = esCool;

  this.saludar = function(){
    console.log("hey que hongo" + this.nombre);
  }
}


var button = document.getElementById("button")

button.addEventListener("click", function()
{
  var nombreValue = document.getElementById("nombre").value;
  var apellidoValue = document.getElementById("apellido").value;
  var passwordValue = document.getElementById("password").value;
  var coolValue = document.getElementById("cool").checked;
  var genderValue = document.getElementById("form").gender.value;

  console.log (nombreValue, apellidoValue, passwordValue, genderValue, coolValue )

  var p = new Persona(nombreValue, apellidoValue, passwordValue, genderValue, coolValue)
  console.log(p);
  p.saludar();

})
