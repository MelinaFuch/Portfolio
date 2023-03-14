let menuVisible = false;

// función para mostrar u ocultar el menú
const mostrarOcultarMenu = () => {
    if (menuVisible) {
        document.getElementById('nav').classList='';
        menuVisible = false;
    } else {
        document.getElementById('nav').classList='responsive';
        menuVisible = true;
    }
}

// función para ocultar menú una vez que selecciono una opción
const seleccionar = () => {
    document.getElementById('nav').classList='';
    menuVisible = false;
}