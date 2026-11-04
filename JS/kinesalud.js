
//carrusel 
var numero = 0;
var imagenes = [
    "../imagenes/instalaciones_frente.jpg",
    "../imagenes/instalaciones_kinebot.jpg",
    "../imagenes/instalaciones_kinebot2.jpg",
    "../imagenes/instalaciones_magnetoterapia.jpg",
    "../imagenes/instalaciones_masajes.jpg",
    "../imagenes/instalaciones_punsion.jpg",
    "../imagenes/instalaciones_camaraGravedaad.jpg"
];
function anterior() {
    numero--; 
    if (numero < 0) {
        numero = 6; 
    }
    document.getElementById("imagen_galeria").src = imagenes[numero];
}
function siguiente() {
    numero++;
    if (numero > 6) {
        numero = 0; 
    }
    document.getElementById("imagen_galeria").src = imagenes[numero];
}
