//programa para mostrar la opcionn de codigo cuando corresponda
function mostrarOcultarCampoTexto() {
    var select = document.getElementById("motivo");
    var campoTexto = document.getElementById("oculto");
  
    if (select.value === "1" || select.value === "2") {
      campoTexto.style.display = "block";
    } else {
      campoTexto.style.display = "none";
    }
}

//validacion de formulario
const formulario = document.getElementById('contact-form');

formulario.addEventListener('submit', function(event) {
  event.preventDefault(); // Evita el envío del formulario

  // Validación de campos
const nombre = document.getElementById('name');
const email = document.getElementById('email');
let valido = true;

if (nombre.value === '') {
    document.getElementById('error-nombre').textContent = 'El nombre es obligatorio';
    valido = false;
  } else {
    document.getElementById('error-nombre').textContent = '';
  }

  if (email.value === '') {
    document.getElementById('error-email').textContent = 'El email es obligatorio';
    valido = false;
  } else {
    document.getElementById('error-email').textContent = '';
  }

  if (valido) {
    // Si todos los campos son válidos, puedes realizar alguna acción, como enviar el formulario o realizar otras tareas.
    formulario.submit();
  }
});