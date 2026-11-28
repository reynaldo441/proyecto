document.addEventListener('DOMContentLoaded', function() {
    console.log('¡Bienvenido a COFFEE Delicia!');

    // Enlaces del menú
    const enlaces = document.querySelectorAll('.menu__enlace');
    enlaces.forEach(function(enlace) {
        enlace.addEventListener('click', function() {
            enlaces.forEach(function(item) {
                item.classList.remove('menu__enlace--activo');
            });
            this.classList.add('menu__enlace--activo');
        });
    });

    // Filtros de productos
    const btnCafe = document.getElementById('btn-cafe');
    const btnReposteria = document.getElementById('btn-reposteria');
    const btnComida = document.getElementById('btn-comida');

    btnCafe.addEventListener('click', function() {
        mostrarCategoria('cafe');
        activarBoton(this);
    });

    btnReposteria.addEventListener('click', function() {
        mostrarCategoria('reposteria');
        activarBoton(this);
    });

    btnComida.addEventListener('click', function() {
        mostrarCategoria('comida');
        activarBoton(this);
    });
});

function mostrarCategoria(categoria) {
    document.querySelector('.tarjeta--cafe').style.display = 'none';
    document.querySelector('.tarjeta--reposteria').style.display = 'none';
    document.querySelector('.tarjeta--comida').style.display = 'none';
    
    document.querySelector('.tarjeta--' + categoria).style.display = 'block';
}

function activarBoton(botonActivo) {
    const botones = document.querySelectorAll('.filtro');
    botones.forEach(function(boton) {
        boton.classList.remove('filtro--activo');
    });
    botonActivo.classList.add('filtro--activo');
}
