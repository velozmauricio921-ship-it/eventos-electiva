// Naruto cambia al Modo Sabio al hacer clic.
const tarjetaNaruto = document.querySelector("#tarjeta-naruto");
const botonNaruto = document.querySelector("#btn-naruto");
const imagenNaruto = document.querySelector("#foto-naruto");
const descripcionNaruto = document.querySelector("#naruto-descripcion");
const estadoNaruto = document.querySelector("#naruto-estado");
let modoSabioActivo = false;

botonNaruto.addEventListener("click", function () {
  modoSabioActivo = !modoSabioActivo;

  if (modoSabioActivo) {
    tarjetaNaruto.classList.add("modo-sabio");
    imagenNaruto.src = "img/images.jpg";
    imagenNaruto.alt = "Naruto Uzumaki en Modo Sabio";
    descripcionNaruto.textContent = "Naruto concentra la energía natural y entra en Modo Sabio.";
    estadoNaruto.textContent = "Estado: Modo Sabio";
    botonNaruto.textContent = "Volver al modo normal";
  } else {
    tarjetaNaruto.classList.remove("modo-sabio");
    imagenNaruto.src = "img/naruto%20normal.jpg";
    imagenNaruto.alt = "Naruto Uzumaki, ninja de Konoha";
    descripcionNaruto.textContent = "Nunca se rinde y siempre protege a sus amigos.";
    estadoNaruto.textContent = "Estado: modo normal";
    botonNaruto.textContent = "Activar Modo Sabio";
  }
});

// Sasuke activa y desactiva el efecto electrico al pasar el mouse.
const tarjetaSasuke = document.querySelector("#tarjeta-sasuke");
const estadoSasuke = document.querySelector("#sasuke-estado");
const imagenSasuke = document.querySelector("#foto-sasuke");

function activarChidori() {
  tarjetaSasuke.classList.add("sasuke-activo");
  imagenSasuke.src = "img/sasuke%20chidori.jpg";
  imagenSasuke.alt = "Sasuke Uchiha usando Chidori";
  estadoSasuke.textContent = "Chidori: chakra de rayo activado.";
}

function desactivarChidori() {
  tarjetaSasuke.classList.remove("sasuke-activo");
  imagenSasuke.src = "img/sasuke%20sin%20chidori.jpg";
  imagenSasuke.alt = "Sasuke Uchiha, ninja del clan Uchiha";
  estadoSasuke.textContent = "Pasa el cursor para activar el Chidori.";
}

tarjetaSasuke.addEventListener("mouseenter", activarChidori);
tarjetaSasuke.addEventListener("mouseleave", desactivarChidori);
tarjetaSasuke.addEventListener("focus", activarChidori);
tarjetaSasuke.addEventListener("blur", desactivarChidori);

// Sakura muestra u oculta su fuerza interior.
const fuerzaSakura = document.querySelector("#sakura-fuerza");
const botonSakura = document.querySelector("#btn-sakura");
const imagenSakura = document.querySelector("#foto-sakura");

botonSakura.addEventListener("click", function () {
  fuerzaSakura.hidden = !fuerzaSakura.hidden;

  if (fuerzaSakura.hidden) {
    imagenSakura.src = "img/sakura%20normal.jpg";
    imagenSakura.alt = "Sakura Haruno, ninja médico del Equipo 7";
    botonSakura.textContent = "Revelar fuerza interior";
  } else {
    imagenSakura.src = "img/sakura%20cmodo%20fuerza.jpg";
    imagenSakura.alt = "Sakura Haruno mostrando su fuerza interior";
    botonSakura.textContent = "Ocultar mensaje";
  }
});

// Kakashi revela el Sharingan y cambia su descripcion.
const tarjetaKakashi = document.querySelector("#tarjeta-kakashi");
const botonKakashi = document.querySelector("#btn-kakashi");
const imagenKakashi = document.querySelector("#foto-kakashi");
const descripcionKakashi = document.querySelector("#kakashi-descripcion");
const estadoKakashi = document.querySelector("#kakashi-estado");
let sharinganActivo = false;

botonKakashi.addEventListener("click", function () {
  sharinganActivo = !sharinganActivo;

  if (sharinganActivo) {
    tarjetaKakashi.classList.add("sharingan-activo");
    imagenKakashi.src = "img/kakashi%20hatake%20con%20el%20sharingan%20.jpg";
    imagenKakashi.alt = "Kakashi Hatake con el Sharingan revelado";
    descripcionKakashi.textContent = "Sharingan revelado: Kakashi puede copiar los movimientos de su rival.";
    estadoKakashi.textContent = "Ojo izquierdo: Sharingan activo.";
    botonKakashi.textContent = "Cubrir Sharingan";
  } else {
    tarjetaKakashi.classList.remove("sharingan-activo");
    imagenKakashi.src = "img/kakashi%20hatake%20sin%20el%20sharinggan.jpg";
    imagenKakashi.alt = "Kakashi Hatake, líder del Equipo 7";
    descripcionKakashi.textContent = "El ninja copia guía al Equipo 7 con calma y experiencia.";
    estadoKakashi.textContent = "Su ojo izquierdo permanece cubierto.";
    botonKakashi.textContent = "Revelar Sharingan";
  }
});

// Iruka gira la tarjeta para mostrar la informacion del reverso.
const tarjetaIruka = document.querySelector("#tarjeta-iruka");
const caraFrontalIruka = document.querySelector("#cara-frontal-iruka");
const caraTraseraIruka = document.querySelector("#cara-trasera-iruka");

function girarTarjetaIruka() {
  const girada = tarjetaIruka.classList.toggle("girada");
  tarjetaIruka.setAttribute("aria-pressed", girada);
  caraFrontalIruka.setAttribute("aria-hidden", girada);
  caraTraseraIruka.setAttribute("aria-hidden", !girada);
}

tarjetaIruka.addEventListener("click", girarTarjetaIruka);

tarjetaIruka.addEventListener("keydown", function (evento) {
  if (evento.key === "Enter" || evento.key === " ") {
    evento.preventDefault();
    girarTarjetaIruka();
  }
});
