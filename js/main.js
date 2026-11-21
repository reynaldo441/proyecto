// Archivo: js/main.js
// COFFEE Delicia - Scripts generales

// Esperar a que cargue todo el HTML
document.addEventListener('DOMContentLoaded', function() {
    console.log('✅ Bienvenido a COFFEE Delicia');
    
    // Ejemplo: Resaltar elemento activo del menú
    const enlacesMenu = document.querySelectorAll('.menu-navegacion a');
    
    enlacesMenu.forEach(enlace => {
        enlace.addEventListener('click', function() {
            // Quitar clase "activo" de todos
            enlacesMenu.forEach(item => item.classList.remove('activo'));
            // Agregar al seleccionado
            this.classList.add('activo');
        });
    });
});
