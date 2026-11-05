
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


//despues de revisar los requisitos del trabajo practico me di cuenta q no puedo usar alert 
//asi q tengo q generar todas las validaciones de nuevo

//validaciones de formulario
 function cargar() {
    var errorDiv = document.getElementById("error");
    errorDiv.textContent = "";

//     //valida nombre
     var nombre = document.formulario.nombre.value.trim();
     var tam_nbre = nombre.length;
     var sinNumero = /\d/; //eso busca q no tenga numeros
     if ((!nombre) || (tam_nbre < 3)) {
        errorDiv.textContent = "el campo nombre debe tener al menos 3 letras";
//         alert('el campo nombre debe tener minimo 3 letras');
        document.formulario.nombre.focus();
        return false;
     }
     else if (sinNumero.test(nombre)) {//.test testea q se cumpla en nombre
        errorDiv.textContent = "el area de nombre no puede tener numeros";
//         alert('esta area no puede tener numeros');
         document.formulario.nombre.focus();
         return false;
     }

//     //valida edad
     var edad = document.formulario.edad.value;
     var ed = parseInt(edad);
     // vacío, no es un num, es menor o igual a 0
     if ((!edad) || isNaN(ed) || (ed <= 0)) {
        errorDiv.textContent = "por favor ingrese una edad numerica valida... si el paciente es bebe registre al padre o tutor y aclare en comentarios la edad del menor a atender";
//         alert('por favor ingrese una edad numerica valida... si el paciente es bebe registre al padre o tutor y aclare en comentarios la edad del menor a atender');
         document.formulario.edad.focus();
         return false;
     }

     else if (ed > 0 && ed < 18) {
         if (ed < 18) {
            errorDiv.textContent = "esta queriendo registrar un menor de edad (entre 1 y 17 años)y eso no es posible, inscriba al tutoy y aclare en cometarios la edad del menor a atender, el mismo debe sebe acompañarlo en la consulta";
//             alert('esta queriendo registrar un menor de edad (entre 1 y 14 años)y eso no es posible, inscriba al tutoy y aclare en cometarios la edad del menor a atender, el mismo debe sebe acompañarlo en la consulta');
         return false;
    }
}

     else if (ed > 70) {
        errorDiv.textContent = "la edad del paciente no puede ser mayor a 70 años, en caso de serlo inscribir al acompañante y aclararlo en comentarios";
//         alert('la edad del paciente no puede ser mayor a 70 años, en caso de serlo inscribir al acompañante y aclararlo en comentarios');
        document.formulario.edad.focus();
         return false;
     }
     //valida telefono
     var telefono = document.formulario.telefono.value;
     var tel = parseInt(telefono);
     if (!parseInt(telefono) || isNaN(tel)||(telefono.length < 10)) {
        errorDiv.textContent = "el telefono a ingresar debe ser sin 0 ni 15 -- ejemplo:2664298749 --  gracias";
//         alert('el telefono a ingresar debe ser sin 0 ni 15 -- "ejemplo:2664298749" --  gracias');
         document.formulario.telefono.focus();
         return false;
     }
     //  Valida correo electrónico
    var email = document.formulario.email.value.trim();
    var condicionEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if ((!email) || !condicionEmail.test(email)) {
        errorDiv.textContent = "ingrese un correo electrónico de formato valido";
        document.formulario.email.focus();
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
//     alert('por favor seleccione minimo un tratamiento a reaziarse');
        errorDiv.textContent = "por favor, seleccione al menos un tratamiento a realizarse";
     return false;
     }
    errorDiv.textContent = "";
var resumenViejo = document.getElementById("resumen-turno");
    if (resumenViejo) {
        resumenViejo.remove();
    }

    
    var divResumen = document.createElement("div");
    divResumen.id = "resumen-turno";
    divResumen.style.backgroundColor = "#e8f5e9";
    divResumen.style.border = "1px solid #4caf50";
    divResumen.style.padding = "25px";
    divResumen.style.marginTop = "2px";
    divResumen.style.borderRadius = "8px";

   
    var titulo = document.createElement("h3");
    titulo.textContent = "¡Turno solicitado con éxito!";
    divResumen.appendChild(titulo);

    // 3. Configuramos la lista
    var lista = document.createElement("ul");
    lista.style.listStyle = "none";
    lista.style.padding = "0";
    lista.style.margin = "10px 0 0 0";


    
    var tratamientosArr = [];
    var cant = document.formulario.tratamiento.length;
    for (var i = 0; i < cant; i++) {
        if (document.formulario.tratamiento[i].checked) {
            tratamientosArr.push(document.formulario.tratamiento[i].value);
        }
    }
    var listaTratamientos = tratamientosArr.join(", ");

    
    var datos = [
        "Nombre: " + nombre,
        "Correo: " + email,
        "Edad: " + edad,
        "Teléfono: " + telefono,
        "Tratamientos: " + listaTratamientos
    ];

    for (var j = 0; j < datos.length; j++) {
        var item = document.createElement("li");
        item.textContent = datos[j];
        item.style.marginBottom = "2px 0"; 
        lista.appendChild(item);
    }

    divResumen.appendChild(lista);

    var contenedorFooter = document.getElementById("resultado-footer");
    contenedorFooter.innerHTML = "";
    contenedorFooter.appendChild(divResumen);

    
    document.formulario.reset();
    return false;
 }
//}
