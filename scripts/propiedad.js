
function filtradoPropiedades(){
   
    const filtroAmbientes = parseInt(document.getElementById('filtro-ambientes').value);
    const filtroUbicacion = document.getElementById('filtro-ubicacion').value;
    const filtroPrecio = document.getElementById('filtro-precio').value;
    const propCards = document.getElementsByClassName('card');

    //DEBUG: console.log('filtros:',filtroAmbientes, filtroUbicacion, filtroPrecio)

    for (let i = 0; i < propCards.length; i++){
        const tarjeta = propCards[i];
        const ambiente = parseInt(tarjeta.getAttribute('data-ambiente'));
        const ubicacion = tarjeta.getAttribute('data-ubicacion');
        const precio = tarjeta.getAttribute('data-precio');
        
        //DEBUG: console.log('ambiente:',ambiente, 'ubicacion',ubicacion)

        if (
            (filtroAmbientes === 0 || ambiente === filtroAmbientes) &&
            (filtroUbicacion === 'todos' || ubicacion === filtroUbicacion) &&
            (filtroPrecio === 'todos' || precio === filtroPrecio)
          ) {
            tarjeta.style.display = 'block';
          } else {
            tarjeta.style.display = 'none';
          }

    }

}