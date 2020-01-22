$(function(){
 'use strict'

    $('div.logo img').on('mouseenter', function(){
    console.log('sobre el logo');

    $('div.logo img').on('mouseenter', function(){
    console.log('fuera del logo');

/* 
    $('div.logo img').on('click', function(){
    $(this).remove();   // THis selecciona el evento asociado a la accion, img en este caso. 
*/

/* 
// 
    $('.logo img').on('click',function(){  //con "on" es la forma en la que esperamos un evento. primero es cuando y luego que hace ante la accion. 
    console.log('has hecho click en el logo'); 
*/
});
});
});
 

 


    


 
// FORMA 1 de insertar un dato en el DOM 

/* 
$('main article:first').hide();

var copia = $('main article:last').clone();

$('main').append(copia); //agrega al final. como si fuera el hijo.
$('main').prepend(copia); //agrega al principio
*/


// FORMA 2 de insertar un dato en el DOM
/* var copia = $('main article:last').clone();

$(copia).appendTo('main');
$(copia).prependTo('main'); */ 



