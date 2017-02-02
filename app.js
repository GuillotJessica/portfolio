let moveDown = function() {
    $('h2').animate({
        bottom: '4.5vh'
    }, 1000, 'swing');
    $('h1').animate({
        bottom: '0'
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
        $(".navlangages").hover(function() {
            //set width to zero at first to restart the animation for each hover
            $(".HTMLFull").css('width', 0);
            $(".CssFull").css('width', 0);
            $(".BootstrapFull").css('width', 0);
            $(".JSFull").css('width', 0);
            $(".JQFull").css('width', 0);
            $(".PhPFull").css('width', 0);
            $(".WPFull").css('width', 0);
            //animate the width of progress bar
            $(".HTMLFull").animate({
                width: '63%'
            }, 1000);
            $(".CssFull").animate({
                width: '49%',
            }, 1000);
            $(".BootstrapFull").animate({
                width: '49%',
            }, 1000);
            $(".JSFull").animate({
                width: '28%',
            }, 1000);
            $(".JQFull").animate({
                width: '49%',
            }, 1000);
            $(".PhPFull").animate({
                width: '7%',
            }, 1000);
            $(".WPFull").animate({
                width: '42%',
            }, 1000);
        });

    } else {
        //mediaquery with no animation
        $("h2").css('top', '0vh');
        $("h1").css('top', '9vh');
        $('h1').css('lineHeight', "1");
        $(".contact").css('top', '0.4vh');
        console.log($('nav').height());
        // set the nav index[i] clicked and show snippet[i] that matched
        $(".header").click(function() {
            // `this` is the DOM element clicked
            var index = $(".header").index(this);
            // clear display block to the snippet  and border bottom to the nav
            $(".snippet").removeClass('selected');
            $(".header").removeClass('borderbtt');
            // display block and border bottom the nav
            $(".snippet").eq(index).addClass('selected');
            $(".header").eq(index).addClass('borderbtt');
        });
        $(".navlangages").click(function() {
            //set width to zero at first to restart the animation for each hover
            $(".HTMLFull").css('width', 0);
            $(".CssFull").css('width', 0);
            $(".BootstrapFull").css('width', 0);
            $(".JSFull").css('width', 0);
            $(".JQFull").css('width', 0);
            $(".PhPFull").css('width', 0);
            $(".WPFull").css('width', 0);
            //animate the width of progress bar
            $(".HTMLFull").animate({
                width: '63%'
            }, 1000);
            $(".CssFull").animate({
                width: '49%',
            }, 1000);
            $(".BootstrapFull").animate({
                width: '49%',
            }, 1000);
            $(".JSFull").animate({
                width: '28%',
            }, 1000);
            $(".JQFull").animate({
                width: '49%',
            }, 1000);
            $(".PhPFull").animate({
                width: '7%',
            }, 1000);
            $(".WPFull").animate({
                width: '42%',
            }, 1000);
        });
    }
});
