// Obtenemos los elementos que van a cambiar.
const tarjeta = document.querySelector(".tarjeta");
const boton = document.querySelector(".boton");
const rango = document.querySelector(".rango");
const nombre = document.querySelector(".nombre");
const descripcion = document.querySelector(".descripcion");
const tecnica = document.querySelector(".tecnica");
const estado = document.querySelector(".estado");

// Esta variable recuerda si la tarjeta esta en modo sombra.
let modoSombraActivo = false;

function alternarModo() {
  modoSombraActivo = !modoSombraActivo;

  if (modoSombraActivo) {
    tarjeta.classList.add("modo-sombra");
    rango.textContent = "Ninja renegado";
    nombre.textContent = "Akira Kage";
    descripcion.textContent = "Se mueve entre las sombras para cumplir su misión.";
    tecnica.textContent = "Técnica: Clon de humo";
    estado.textContent = "Estado: modo sombra";
    boton.textContent = "Volver al modo aldea";
  } else {
    tarjeta.classList.remove("modo-sombra");
    rango.textContent = "Ninja aprendiz";
    nombre.textContent = "Akira";
    descripcion.textContent = "Entrena en silencio y protege a su equipo.";
    tecnica.textContent = "Técnica: Paso silencioso";
    estado.textContent = "Estado: modo aldea";
    boton.textContent = "Activar modo sombra";
  }
}

boton.addEventListener("click", alternarModo);
