$(document).ready(function(){
    $('.imCaptchaPop').hide();

    window.addEventListener("keydown", function(e) {
        // space and arrow keys
        if([37, 38, 39, 40].indexOf(e.keyCode) > -1) {
            e.preventDefault();
        }
    }, false);

    $('.containerCheckbox').click(function() {
        if(popUpDone === false){
            if(popVis === false){
                $('.imCaptchaPop').fadeIn('fast');
                $('.imCaptchaPop').removeClass('scaleDown');
                $('.imCaptchaPop').addClass('scaleUp');

                $('.containerCheckbox').addClass('scaleDown').delay(500).queue(function() {
                    $(this).addClass('loadingBar');
                    $(this).removeClass("containerCheckboxBefore");
                    $(this).removeClass("scaleDown");

                    $(this).dequeue();
                });

                $('.containerCheckbox').addClass('scaleUp').delay(500).queue(function() {
                    $(this).removeClass("scaleUp");
                    $(this).dequeue();
                });
                popVis = true;
            }
            else{
                $('.imCaptchaPop').addClass('scaleDown');
                $('.imCaptchaPop').removeClass('scaleUp');
                $('.imCaptchaPop').fadeOut("fast");
                $('.containerCheckbox').removeClass('loadingBar');
                $('.check').css('stroke-dashoffset', 0);
                popVis = false;
                popUpDone = true;
                $('.containerCheckbox').css('cursor', 'default');
            }
        }
    });
});

var popVis = false;
var popUpDone = false;