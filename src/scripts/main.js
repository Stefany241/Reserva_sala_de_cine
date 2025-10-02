document.addEventListener('DOMContentLoaded', function() {
    const menuLinks = document.querySelectorAll('.menu a');
    const contentSections = document.querySelectorAll('.content-section');

    // Función para ocultar todas las secciones de contenido
    function hideAllSections() {
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
    }

    // Mostrar la sección de inicio por defecto
    hideAllSections();
    document.getElementById('inicio').style.display = 'block';

    // Agregar event listeners a los enlaces del menú
    menuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionId = this.dataset.section;

            // Ocultar todas las secciones
            hideAllSections();

            // Mostrar la sección correspondiente
            document.getElementById(sectionId).style.display = 'block';
        });
    });

    // Manejo del formulario de reserva
    document.getElementById('form-reserva').addEventListener('submit', function(e) {
        e.preventDefault();
        const pelicula = document.getElementById('pelicula').value;
        const horario = document.getElementById('horario').value;
        const asientos = document.getElementById('asientos').value;
        const mensaje = document.getElementById('mensaje');
        mensaje.textContent = `¡Reserva confirmada para "${pelicula}" a las ${horario} con ${asientos} asiento(s)! ¡Disfruta de la película!`;
    });
});