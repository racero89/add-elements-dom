// Aquí tu código
const lista = document.getElementById("lista");
const boton = document.getElementById("agregar");

boton.onclick = function () {
  let nuevoElemento = document.createElement("li");
  nuevoElemento.textContent = "Nuevo elemento"; // Apuntes: textContent permite poner texto <li>

  lista.appendChild(nuevoElemento); // Apuntes: Agrega el nuevo <li> a la lista.
};
