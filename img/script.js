// Seleccionamos los elementos del DOM
const toggleThemeBtn = document.getElementById("toggle-theme");
const infoText = document.getElementById("info");
const extraInfo = document.getElementById("extra-info");

// Establecer un estado inicial para el tema
let isDarkMode = false;

// Función para cambiar el tema (modo claro/oscuro)
toggleThemeBtn.addEventListener("click", () => {
    isDarkMode = !isDarkMode;
    
    if (isDarkMode) {
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});

// Función para mostrar información extra con animación
infoText.addEventListener("click", () => {
    if (extraInfo.style.display === "none" || extraInfo.style.display === "") {
        extraInfo.style.display = "block";  // Mostrar el div
        setTimeout(() => {
            extraInfo.style.opacity = "1";  // Hacerlo visible con transición suave
        }, 10);
    } else {
        extraInfo.style.opacity = "0";  // Desvanecerlo
        setTimeout(() => {
            extraInfo.style.display = "none";  // Ocultarlo después de la animación
        }, 500);
    }
});
