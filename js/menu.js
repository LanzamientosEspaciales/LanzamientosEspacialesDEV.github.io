const cabecera = document.getElementById('cabecera');
let prevScrollPos = window.scrollY;

window.addEventListener('scroll', () => {
    const currentScrollPos = window.scrollY;
    
    if (prevScrollPos > currentScrollPos) {
        // Si se desplaza hacia arriba, muestra la cabecera
        cabecera.style.transform = 'translateY(0)';
        isScrollingUp = true;
    } else {
        // Si se desplaza hacia abajo, oculta la cabecera
        cabecera.style.transform = 'translateY(-100%)';
    }

    prevScrollPos = currentScrollPos;
});
