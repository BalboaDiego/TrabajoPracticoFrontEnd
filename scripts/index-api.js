const clave = '7EfMxOvktaO7wKGPn-kyL-rAt0Dpq33xHJPPVSxY7Yo';
const busqueda = 'real state';

fetch(`https://api.unsplash.com/search/photos?query=${busqueda}&client_id=${clave}&orientation=landscape`)
  .then(response => response.json())
  .then(data => {
    const imagenes = data.results.filter(imagen => {
      return imagen.id = '2d4lAQAlbDA';
    })

    if (imagenes.length > 0) {
      const imagen = document.getElementById('imagen');
      imagen.src = imagenes[0].urls.regular;

      const imagen2 = document.getElementById('imagen2');
      imagen2.src = imagenes[3].urls.regular;

      const imagen3 = document.getElementById('imagen3');
      imagen3.src = imagenes[8].urls.regular;

      const imagen4 = document.getElementById('imagen4');
      imagen4.src = imagenes[9].urls.regular;
    }

  })
  .catch(error => {
    console.error(error);
  });

var myCarousel = document.getElementById('carouselExampleIndicators');
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 100
});
