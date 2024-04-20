/ Vector de palabras para el juego
const palabras = ["gato", "perro", "casa", "coche", "libro", "sol", "mesa", "silla", "telefono", "ordenador"];

// Función para elegir una palabra aleatoria
function elegirPalabra() {
    const indiceAleatorio = Math.floor(Math.random() * palabras.length);
    return palabras[indiceAleatorio];
}

// Función principal del juego
function jugarWordle() {
    const palabraSecreta = elegirPalabra();
    document.getElementById("palabraSecreta").textContent = palabraSecreta;
}

// Llamada inicial al cargar la página
jugarWordle();
