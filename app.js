let moveDown = function() {
    $('h2').animate({
        top: '80vh'
    }, 3000, 'swing');
    $('h1').animate({
        top: '88vh'
    }, 3000, 'swing', function() {
        $('nav').fadeIn(4000);
    })
}





$(document).ready(function() {
    moveDown()
    $( ".header" ).hover(function() {
      // `this` is the DOM element that was clicked
      var index = $( ".header" ).index( this );
      $( ".snippet" ).removeClass('selected');
      $( ".snippet" ).eq(index).addClass('selected');

    });
});
