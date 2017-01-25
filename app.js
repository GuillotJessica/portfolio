let moveDown = function() {
    $('h2').animate({
        top: '80vh'
    }, 1000, 'swing');
    $('h1').animate({
        top: '88vh'
    }, 1000, 'swing', function() {
        $('nav').fadeIn(1000);
    })
}





$(document).ready(function() {
    if (window.matchMedia("(min-width: 800px)").matches) {
        moveDown()
        $(".header").hover(function() {
            // `this` is the DOM element that was clicked
            var index = $(".header").index(this);
            $(".snippet").removeClass('selected');
            $(".snippet").eq(index).addClass('selected');

        });
    } else {
        $("h2").css('top', '0vh');
        $("h1").css('top', '9vh');
        $('h1').css('lineHeight', "1");
        $(".contact").css('top', '2.6vh');
console.log($('nav').height());
$(".header").click(function() {
    // `this` is the DOM element that was clicked
    var index = $(".header").index(this);
    $(".snippet").removeClass('selected');
    $(".snippet").eq(index).addClass('selected');
    $(".header").removeClass('borderbtt');
    $(".header").eq(index).addClass('borderbtt');



});
    }
});
