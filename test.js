function saludo(nombre) {

  var msg = "Hola ";

  // concateno el nombre

  msg += nombre;



  // concateno nuevamente

  msg += "\nComo estas?";
  alert(msg + nombre)
}

alert(saludo('Juan'));
