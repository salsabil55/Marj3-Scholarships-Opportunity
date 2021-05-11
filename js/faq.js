var clics = 0;

$(document).ready(function() {

  $('.respuesta').hide();
  $('#cerrartodas').hide();

  $('.faq-body h3').click(function() {

    $(this).next('.respuesta').toggle(function() {

      $(this).next('.respuesta');

    }, function() {

      $(this).next('.respuesta').fadeIn('fast');

    });

    if ($(this).hasClass('cerrar')) {
      $(this).removeClass('cerrar');
    } else {
      $(this).addClass('cerrar');
    };

    if ($('.cerrar').length >= 3) {

      $('#cerrartodas').fadeIn('fast');

    } else {
      $('#cerrartodas').hide();
      var abiertas = $('.cerrar').length
      console.log(abiertas);
    }
  }); //Close Function Click	            
  
  $( "#preguntas" ).accordion();

}); //Close Function Ready

$('#cerrartodas').click(function() {
  $('.respuesta').fadeOut(200);
  $('.faq-body .h3').removeClass('cerrar');
  $('#cerrartodas').fadeOut('fast');

  
});