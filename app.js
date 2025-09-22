// app.js
// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación.


const amigos = [];


const $input = document.getElementById("amigo");
const $lista = document.getElementById("listaAmigos");
const $resultado = document.getElementById("resultado");

// Normalizar nombres (sin tildes, minúsculas y sin espacios extra)
function normaliza(texto) {
  return texto
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

// Mostrar un mensaje en el área de resultado
function mostrarMensaje(mensaje) {
  $resultado.innerHTML = "";
  const li = document.createElement("li");
  li.textContent = mensaje;
  $resultado.appendChild(li);
}

// Renderizar lista de amigos
function renderizarLista() {
  $lista.innerHTML = "";
  amigos.forEach((nombre, idx) => {
    const li = document.createElement("li");
    li.textContent = `${idx + 1}. ${nombre}`;
    $lista.appendChild(li);
  });
}

// Validar si el nombre es vacío
function esNombreValido(nombre) {
  return nombre.trim() !== "";
}

// Validar si ya existe en la lista
function esDuplicado(nombre) {
  return amigos.some((a) => normaliza(a) === normaliza(nombre));
}

// Agregar un nuevo amigo
function agregarAmigo() {
  const valor = ($input.value || "").trim();

  if (!esNombreValido(valor)) {
    mostrarMensaje("Por favor, escribe un nombre válido.");
    $input.focus();
    return;
  }

  if (esDuplicado(valor)) {
    mostrarMensaje("Ese nombre ya está en la lista.");
    $input.select();
    return;
  }

  amigos.push(valor);
  renderizarLista();
  mostrarMensaje(`Se agregó: ${valor}`);
  limpiarInput();
}

// Sortear un amigo al azar
function sortearAmigo() {
  if (amigos.length === 0) {
    mostrarMensaje("No hay participantes para sortear.");
    $input.focus();
    return;
  }

  const idx = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[idx];
  mostrarMensaje(`🎉 El amigo secreto es: ${ganador}`);
}


function limpiarInput() {
  $input.value = "";
  $input.focus();
}

function inicializarEventos() {
  $input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      agregarAmigo();
    }
  });
}

// Arranca con lista vacía y activa listeners
function init() {
  renderizarLista();
  inicializarEventos();
}

// Ejecuta la app
init();

window.agregarAmigo = agregarAmigo;
window.sortearAmigo = sortearAmigo;