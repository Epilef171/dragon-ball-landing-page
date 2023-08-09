const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = '#29323c';
  } else {
    header.style.backgroundColor = 'transparent';
  }
});

menu_item.forEach((item) => {
  item.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobile_menu.classList.toggle('active');
  });
});

// Datos curiosos de Dragon Ball
const datosCuriosos = [
  "Goku es el primer personaje que supera la transformación de Super Saiyan 4 en Dragon Ball GT, alcanzando el estado de Super Saiyan 4 Full Power.",
  "La primera vez que se menciona el nombre del planeta natal de los Saiyans es en la película de Dragon Ball Z: Bardock, el Padre de Goku.",
  "En el doblaje latino de Dragon Ball Z, el ataque 'Kamehameha' se llama 'Onda Vital'.",
  "Akira Toriyama, creador de Dragon Ball, basó el diseño de Cell en un personaje de su manga anterior llamado 'Dr. Slump'.",
  "Goku ha derrotado a más de 20 villanos a lo largo de la serie Dragon Ball.",
  "El nombre completo de Bulma es 'Bulma Brief', y su padre es el creador de las Capsule Corporation.",
  "El radar del dragón, utilizado para encontrar las Esferas del Dragón, se llama 'Dragon Radar' en el anime.",
  "La técnica 'Kamehameha' lleva el nombre de Kamehameha I, el primer rey de Hawái.",
  "En el manga original de Dragon Ball, el personaje de Launch tenía una personalidad bipolar: rubia y tímida cuando estaba feliz, y morena y violenta cuando estaba enojada.",
  "Akira Toriyama creó el personaje de Vegeta como un villano, pero con el tiempo se convirtió en uno de los héroes más populares de la serie.",
  "El personaje de Krilin ha muerto un total de siete veces en la serie Dragon Ball.",
  "El nombre de 'Capsule Corporation' proviene del hecho de que las cápsulas que crean pueden contener objetos de gran tamaño en un espacio pequeño.",
  "En Dragon Ball Z, el Planeta Namek tenía una luna roja, mientras que en el manga original de Dragon Ball, el planeta tenía dos lunas verdes.",
  "En el doblaje latino, el maestro Roshi se llama 'Mutenroshi', que significa 'Tortuga Anciana' en japonés.",
  "El primer enemigo al que Goku enfrenta en Dragon Ball Z es Raditz, su hermano mayor.",
  "La transformación de Super Saiyan 2 de Gohan en la Saga de Cell es una de las escenas más icónicas de la serie.",
  "En la versión original japonesa, el nombre del ataque 'Spirit Bomb' es 'Genki Dama' que significa 'Esfera de Energía'.",
  "Dragon Ball ha inspirado a numerosos artistas y mangakas, y su impacto en la cultura pop es innegable."
];

function mostrarNuevaCuriosidad() {
  const curiosidadTexto = document.getElementById("curiosidad-texto");
  const curiosidadAleatoria = datosCuriosos[Math.floor(Math.random() * datosCuriosos.length)];
  curiosidadTexto.textContent = curiosidadAleatoria;
}

// Mostrar un dato curioso al cargar la página
document.addEventListener("DOMContentLoaded", mostrarNuevaCuriosidad);

