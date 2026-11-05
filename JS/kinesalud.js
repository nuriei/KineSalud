
//carrusel 
var numero = 0;
var imagenes = [
    "imagenes/instalaciones_frente.jpg",
    "imagenes/instalaciones_kinebot.jpg",
    "imagenes/instalaciones_kinebot2.jpg",
    "imagenes/instalaciones_magnetoterapia.jpg",
    "imagenes/instalaciones_masajes.jpg",
    "imagenes/instalaciones_punsion.jpg",
    "imagenes/instalaciones_camaraGravedaad.jpg"
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
//validaciones de formulario
function cargar() {

    //valida nombre
    var nombre = document.formulario.nombre.value.trim();
    var tam_nbre = nombre.length;
    var sinNumero = /\d/; //eso busca q no tenga numeros
    if ((!nombre) || (tam_nbre < 3)) {
        alert('el campo nombre debe tener minimo 3 letras');
        document.formulario.nombre.focus();
        return false;
    }
    else if (sinNumero.test(nombre)) {//.test testea q se cumpla en nombre
        alert('esta area no puede tener numeros');
        document.formulario.nombre.focus();
        return false;
    }

    //valida edad
    var edad = document.formulario.edad.value;
    var ed = parseInt(edad);
    // vacío, no es un num, es menor o igual a 0
    if ((!edad) || isNaN(ed) || (ed <= 0)) {
        alert('por favor ingrese una edad numerica valida... si el paciente es bebe registre al padre o tutor y aclare en comentarios la edad del menor a atender');
        document.formulario.edad.focus();
        return false;
    }

    else if (edad > 0 && edad < 18) {
        if (edad < 15) {
            alert('esta queriendo registrar un menor de edad (entre 1 y 14 años)y eso no es posible, inscriba al tutoy y aclare en cometarios la edad del menor a atender, el mismo debe sebe acompañarlo en la consulta');
        } else {
            alert('el paciente es menor de edad (entre 15 y 17 años)al momento de la consulta debe venir acompañado del tutor y aclarar los datos del mismo en los comentarios.');
        }
        //aca no pongo return false; porque no quiero que corte el proceso de carga del formulario, solo quiero que avise al usuario
    }

    else if (edad > 70) {
        alert('la edad del paciente no puede ser mayor a 70 años, en caso de serlo inscribir al acompañante y aclararlo en comentarios');
        document.formulario.edad.focus();
        return false;
    }
    //valida telefono
    var telefono = document.formulario.telefono.value;
    var tel = parseInt(telefono);
    if (!parseInt(telefono) || isNaN(tel)||(telefono.length < 10)) {
        alert('el telefono a ingresar debe ser sin 0 ni 15 -- "ejemplo:2664298749" --  gracias');
        document.formulario.telefono.focus();
        return false;
    }
        // valida checkbox
  var cantchk = 0;
var cant = document.formulario.tratamiento.length;

for (var i = 0; i < cant; i++) {
    if (document.formulario.tratamiento[i].checked) {
        cantchk++;    
    }
}

if (cantchk < 1) {
    alert('por favor seleccione minimo un tratamiento a reaziarse');
    return false;
}

if (confirm('confiirma los datos ingresados para reserbar turno?')) {
    return true;
} else {
    return false;
}
}
