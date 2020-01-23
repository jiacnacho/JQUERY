$(function(){
 'use strict'
 $('.nuestros-servicios div:first').show();
 $('.servicios nav a:first').addClass('activo');


 $('.servicios nav a').on('click', mostrarTabs);

 function mostrarTabs() {
    
    $('.servicios nav a').removeClass('activo');
    $(this).addClass('activo');
    var enlace = $(this).attr('href');  //$(this) para tomar el enlace sobre el cual hizo click
    $('.nuestros-servicios div').fadeOut();
    $(enlace).fadeIn();
    

    console.log(enlace);
    return false;
 }






// RECORRER ARRAYS Y OBJETOS CON METODO EACH

 /* 
 
 var proximosViajes = ['Londres', 'Valencia', 'Madrid', 'Paris', 'Milan'];
 
 $.each(proximosViajes, function (i, v) {
    if (i == 0){
        $('aside').append('<h2>Proximos Viajes</h2>')
    }
    $('aside').append('<li>' + v + '</li>');
 });

 console.log(proximosViajes);

 var viajesPorFecha = {
     primero: 'Londres',
     segundo: 'Valencia',
     tercero: 'Madrid',
     cuarto: 'Paris',
     quinto: 'Milan'     
 }

 $.each(viajesPorFecha, function(i, v){
     $('aside').append('<li>' + i + ' - ' + v + '</li>');

 });

 console.log(viajesPorFecha);
 */

// FUNCION LOAD PARA CARGAR CONTENIDO HTML 

/*
 $('aside').load('promociones.html'); 
*/

/* 

// CARGAR CONTENIDO DESDE BACKEND A FRONT CON AJAX.

 $('div.logo img').on('click', cargarAjax);

 function cargarAjax(){
     $.ajax('promociones.txt', {
        success: agregarContenido,
        type: 'GET', // tipo donde obtengo la informacion
        datatype:'text' // el tipo de dato que obtengo
     });
 }

 function agregarContenido(data, status, jqxhr){ // se le pasan 3 datos, los datos, el status y ultimo el metodo ajax
    $('aside').text(data);
    console.log(status);
 } 
 
 */


/* METODO slide PARA SUBIR O BAJAR CONTENIDO 

$('.logo img').click(function(){
    $('main article:first').slideUp(1000);
 });

 $('aside').click(function(){
    $('main article:first').slideDown(1000);
 }); 
 
 */



// FUNCION ANIMATE, PARA ANIMAR ELEMENTOS CON CSS

/* 

$('.logo img').on('click', function(){
    $(this).animate({'width': '200px'}, 1000); // Sirve para animar, 1000 es el tiempo de transicion.
});

$('main article img').on('mouseenter', aumentarImagen);
$('main article img').on('mouseleave', disminuirImagen);

function aumentarImagen(event){
    $(this).animate({'width': '100%'},);
}

function disminuirImagen(event){
    $(this).animate({'width': '350px'});
} 

*/


// COMO CAMBIAR EL CSS DE UN ELEMENTO

/* 

$('.logo img').css({width: '400px'}); 

$('main article h2').css({color: '#db008d'});

$('aside').css({'background-color': '#e1e1e1',
             'text-transform': 'uppercase',
             'padding': '20px'
});

$('.navegacion ul li a').on('mouseenter', cambiarColor);

function cambiarColor(event){
    $('.navegacion').css('background-color', 'red'); // si no se usan las {} con comillas simples y coma se selecciona y asigna valor al elemento css
} 

*/

/* 

// COMO EDITAR UN ATRIBUTO CON UN CLICK

 $('main article:first img').on('click', function(){
    $(this).attr('src', 'img/imagen_2.jpg')
 }); 
 
*/

/* 

// CAPTURA DE ATRIBUTOS Y EDICION DE SUS VALORES INTERNOS

 $('.navegacion ul li:first a').attr('href'); // Captura del valor del atributo
 $('.navegacion ul li:first a').attr('href', 'http://www.udemy.com'); // Edicion del atributo
 $('.navegacion ul li:first a').attr('target', '_blank'); // Edicion de atributo
 $('article:first img').attr('src');
 $('article:first img').attr('src', 'img/imagen_2.jpg'); 
 
 */

/*  

// CAPTURAR TEXTO, MODIFICAR TEXTO, MODIFICAR ELEMENTOS DEL DOM

 $('main article:first h2').text(); // como capturar el texto de un elemento
 $('main article:first h2').text('HOLA'); // Como editar el texto de un elemento
 $('main article:first h2').html('<h1>Londres 2016</h1>'); //Como cambiar elementos y su texto
 $('.navegacion ul li:first a').text();
 $('.navegacion ul li:first a').text('Home'); */

/*  

// TRAVERSING EN DOM 

 $('.navegacion');
 $('.navegacion').children();
 $('.navegacion').children().children();
 $('.navegacion').children ().children(); //para seleccionar su hijo inmediato

 $('.article:first').next(); // para seleccionar su siguiente 
 $('.article:first').parent(); // para seleccionar su padre
 $('.article:first').parent().children();
 $('.article:first').parent().children()[2];   */



/*  

// COMO AGREGAR VARIAS CLASES A UN MISMO ELEMENTO, OBJETO DE CLASES?

$('main').on({
    click: function() {
        $(this).addClass('fondorojo activo');
    }, 
    mouseenter: function(){
        $(this).addClass('fondorojo');
    },
    mouseleave: function(){
        $(this).addClass('activo');
    }
 }) 

*/



/*   

// COMO AGREGAR CLASES SOBRE ELEMENTOS

$('div.logo img').addClass ('activo');

  $('.navegacion').show();

 

 $('.navegacion nav ul a').on('click', function(e){
    $('.navegacion nav ul a').removeClass('activo');
    e.preventDefault(); // preventDefault sirve para prevenir que el navegar haga una accion por default. En este caso abrir un hypervinculo
    $(this).addClass('activo'); 
});
*/


  
  

/*     
// EVENTO MOUSE ENTER Y MOUSE LEAVE SOBRE ELEMENTOS DEL DOM

$('div.logo img').on('mouseenter', function(){
    console.log('sobre el logo');

    $('div.logo img').on('mouseleave', function(){
    console.log('fuera del logo'); //Escucha el evento cuando el mouse sale del elemento
*/

/*     

// EVENTO CLICK SOBRE ELEMENTO SOBRE ELEMENTOS DEL DOM

$('#menu').on('click',function(){              
        $('#navegacion').show(); 
    }); 
*/
   


/* 
    $('div.logo img').on('click', function(){
    $(this).remove();   // THis selecciona el evento asociado a la accion, img en este caso. 
*/

/* 
// 
    $('.logo img').on('click',function(){  //con "on" es la forma en la que esperamos un evento. primero es cuando y luego que hace ante la accion. 
    console.log('has hecho click en el logo'); 
*/ 


 
/* 

// FORMA 1 de insertar un dato en el DOM 

$('main article:first').hide();

var copia = $('main article:last').clone();

$('main').append(copia); //agrega al final. como si fuera el hijo.
$('main').prepend(copia); //agrega al principio

*/



/* 

// FORMA 2 de insertar un dato en el DOM

var copia = $('main article:last').clone();

$(copia).appendTo('main');
$(copia).prependTo('main'); 

*/ 


});
