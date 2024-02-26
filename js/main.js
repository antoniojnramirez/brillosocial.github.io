document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces que apuntan a los elementos específicos
    document.querySelectorAll('a[href^="#nosotros"], a[href^="#galeria"], a[href^="#ofertas"], a[href^="#lugares"], a[href^="#clientes"], a[href^="#paquetes"], a[href^="#contacto"]').forEach(anchor => {
        // Agregar un event listener para cada enlace
        anchor.addEventListener('click', function (e) {
            // Prevenir el comportamiento predeterminado del enlace
            e.preventDefault();
            
            // Obtener el elemento al que se va a desplazar
            const target = document.querySelector(this.getAttribute('href'));

            // Desplazamiento suave hacia el elemento objetivo
            target.scrollIntoView({
                behavior: 'smooth', // Desplazamiento suave
                block: 'start' // Desplazar el elemento al inicio de la ventana
            });
        });
    });
});

//boton hacia arriba
function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth" // Para un desplazamiento suave
    });
  }

//cuadro de busqueda
function search(event) {
    // Verificar si se presionó la tecla "Enter"
    if (event.keyCode === 13) {
      // Obtener el valor ingresado en el campo de búsqueda
      var searchText = document.getElementById("searchInput").value.toLowerCase();
      
      // Aquí podrías tener una lógica para determinar la URL de la página que el usuario busca
      // Por ahora, simplemente redirigimos a una página de ejemplo
      // Reemplaza "pagina_ejemplo.html" con la URL real de tu página
      var paginaSolicitada = "#nosotros";
      var paginaSolicitada = "#galeria";
      var paginaSolicitada = "#ofertas";
      var paginaSolicitada = "#lugares";
      var paginaSolicitada = "#clientes";
      var paginaSolicitada = "#paquetes";
      

      
      // Redirigir a la página solicitada
      window.location.href = paginaSolicitada;
    }
  }
