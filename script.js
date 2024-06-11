document.addEventListener('DOMContentLoaded', function () {
    let currentSection = 0;
    const sections = ['#info-section', '#join-section'];

    window.addEventListener('scroll', function () {
        const mainContent = document.getElementById('main-content');
        mainContent.style.display = 'none';

        if (currentSection < sections.length) {
            const section = document.querySelector(sections[currentSection]);
            section.classList.add('show');
            currentSection++;
        }

        // Elimina el scroll listener una vez mostradas ambas secciones
        if (currentSection >= sections.length) {
            window.removeEventListener('scroll', arguments.callee);
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('register-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que se envíe el formulario

        // Obtener valores del formulario
        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        const location = document.getElementById('location').value;

        // Guardar datos en el almacenamiento local del navegador
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        localStorage.setItem('location', location);

        // Redirigir al usuario a la página de inicio de sesión
        window.location.href = 'index.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('login-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que se envíe el formulario

        // Obtener valores del formulario
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Recuperar datos del almacenamiento local
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        // Comparar los datos del formulario con los almacenados
        if (email === storedEmail && password === storedPassword) {
            // Si coinciden, redirigir al usuario a la página de home
            window.location.href = 'page_home.html';
        } else {
            // Si no coinciden, mostrar un mensaje de error o realizar otra acción
            alert('Usuario o contraseña incorrectos');
        }
    });
});

