// Obtenemos los elementos que van a cambiar.
const tarjeta = document.querySelector(".tarjeta");
const boton = document.querySelector(".boton");
const estado = document.querySelector(".estado");

// Esta variable recuerda si la tarjeta esta en modo sombra.
let modoSombraActivo = false;

function alternarModo() {
  modoSombraActivo = !modoSombraActivo;
  tarjeta.classList.toggle("modo-sombra", modoSombraActivo);

  if (modoSombraActivo) {
    estado.textContent = "Estado: modo sombra";
    boton.textContent = "Volver al modo aldea";
  } else {
    estado.textContent = "Estado: modo aldea";
    boton.textContent = "Activar modo sombra";
  }
}

boton.addEventListener("click", alternarModo);
