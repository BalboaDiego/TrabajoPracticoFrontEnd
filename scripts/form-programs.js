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
