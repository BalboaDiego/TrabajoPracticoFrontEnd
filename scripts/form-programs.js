//programa para mostrar la opcion de codigo cuando corresponda
function mostrarOcultarCampoTexto() {
  var select = document.getElementById("motivo");
  var campoTexto = document.getElementById("oculto");

  if (select.value === "1" || select.value === "2") {
      campoTexto.style.display = "block";
  } else {
      campoTexto.style.display = "none";
  }
  warnMotivo.innerHTML = ""
}

//Validacion de formulario y envío de mail por Emailjs
const nombre = document.getElementById("name")
const email = document.getElementById("email")
const tel = document.getElementById("tel")

const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const warnNombre = document.getElementById("warn_nombre")
const warnMail = document.getElementById("warn_mail")
const warnTel = document.getElementById("warn_tel")
const warnMotivo = document.getElementById("warn_motivo")

form.addEventListener("submit", e => {
  e.preventDefault()
  let entrar = false
  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  let regexTel = /^\d{7,14}$/
  parrafo.innerHTML = ""
  warnNombre.innerHTML = ""
  warnMail.innerHTML = ""
  warnTel.innerHTML = ""
  warnMotivo.innerHTML = ""

  const btn = document.getElementById('button');
  const serviceID = 'default_service';
  const templateID = 'template_b7h9ry9';
  const serviceIDCopia = 'default_service';
  const templateIDCopia = 'template_x3fwocp';
  const miCheckbox = document.getElementById("miCheckbox");

  if (nombre.value.length < 6) {
      warnNombre.innerHTML = `El nombre no es válido`
      entrar = true
  }
  if (!regexEmail.test(email.value)) {
      warnMail.innerHTML = `El email no es válido`
      entrar = true
  }
  if (!regexTel.test(tel.value)) {
      warnTel.innerHTML = `El número de teléfono no es válido`
      entrar = true
  }
  if (motivo.value === "0") {
      warnMotivo.innerHTML = "Por favor, elija una opción";
      entrar = true;
  }
  if (entrar) {
      parrafo.innerHTML = "Falta completar datos!";
      parrafo.classList.add("error-message");
      parrafo.classList.remove("success-message");

  } else {
      if (miCheckbox.checked) {
          emailjs.sendForm(serviceIDCopia, templateIDCopia, form)
              .then(() => {
                  btn.innerHTML = 'Enviar consulta';
                  alert('Consulta enviada!');
              }, (err) => {
                  btn.innerHTML = 'Enviar consulta';
                  alert(JSON.stringify(err));
              });
      } else {
          emailjs.sendForm(serviceID, templateID, form)
              .then(() => {
                  btn.innerHTML = 'Enviar consulta';
                  alert('Consulta enviada!');
              }, (err) => {
                  btn.innerHTML = 'Enviar consulta';
                  alert(JSON.stringify(err));
              });
      }

      btn.innerHTML = 'Enviando...';
      parrafo.innerHTML =
          "Consulta enviada! <br/> Si no respondemos a la brevedad puedes contactarte con nosotros con cualquier red social publicado al pie de página. <br/> Muchas gracias!";
      parrafo.classList.add("success-message");
      parrafo.classList.remove("error-message");
  }
});
// Para restablecer los valores de los campos del formulario
window.addEventListener('load', function () {
  var form = document.getElementById('form');
  form.reset();
});

