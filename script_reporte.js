document.getElementById('reporteForm').addEventListener('submit', function(event) {
    event.preventDefault();
    Swal.fire({
        title: '¡Reporte Publicado!',
        text: 'Su reporte ha sido publicado.',
        icon: 'success',
        confirmButtonText: 'OK'
    });
});