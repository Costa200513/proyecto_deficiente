// calculadora

function calc() {

  var n = document.getElementById('n').value
  var mail = document.getElementById('mail').value
  var a = document.getElementById('a').value
  var b = document.getElementById('b').value
  var c = document.getElementById('c').value
  var d = document.getElementById('d').value

  // verificacion
  if (n == '') {
    alert('falta el nombre')
    return
  }
  if (mail == '') {
    alert('falta el correo')
    return
  }

  // calculo del impacto (los numeros son inventados mas o menos)
  var total = 0
  total = total + a * 3
  total = total + b * 5
  total = total + c * 2
  total = total + d

  // a veces sale NaN si no pusieron numeros pero bueno
  
  var msg = ''
  if (total < 30) {
    msg = 'tu impacto es BAJO'
  } else {
    msg = 'tu impacto es ALTO'
    // falta el nivel medio, se olvido
  }

  document.getElementById('res').style.display = 'block'
  document.getElementById('res').innerHTML = 'Hola ' + n + '! <br> Resultado: ' + total + '<br>' + msg + '<br><br>Gracias por dejar tu correo: ' + mail + '. Te mandamos el resultado! (en realidad no mandamos nada porque es un proyecto de la escuela)'
}
