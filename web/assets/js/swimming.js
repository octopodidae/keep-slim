/*!
 * Chart.js
 * http://chartjs.org/
 * Version: 1.0.1
 *
 * Copyright 2015 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */

$(document).ready(function() {  
    
    var toogle = $("#toggle");
    var nav = $("#navigation");
    var home = $("#home");
    var walk = $("#walk");
    var bike = $("#bike");
    var content_home = $("#content_home");
    var content_walk = $("#content_walk");
    var content_bike = $("#content_bike");
    var rows = $(".rows");
    var sum = 0;
    var percentage = 0;
    var px = 0;
    var goal = 3000;
    var line = $('#line');
    var mySlider = $('#mySlider');
    var settings_btn = $('#btn_settings'); 
    var background_slider = $('.background-slider');
    var myColor = "";
    var graphic_area = $('.graphic-area');
    var water = $('.water');
    
    animateWater();

    // Vertical Navigation //
    toogle.click(function() {
        $(this).toggleClass("on");
        nav.animate({width: 'toggle'});
    });

    content_home
        .mouseenter(function () {
            $(this).css("background-color", "#4975FB")
            home.removeClass('md-light md-inactive')
            home.addClass("link")

        })
        .mouseleave(function () {
            $(this).css("background-color", "transparent")
            home.addClass('md-light md-inactive');
        })

    content_walk
        .mouseenter(function () {
            $(this).css("background-color", "#924DE6")
            walk.removeClass('md-light md-inactive');
            walk.addClass("link")
        })
        .mouseleave(function () {
            $(this).css("background-color", "transparent")
            walk.addClass('md-light md-inactive');
        })

    content_bike
        .mouseenter(function () {
            $(this).css("background-color", "#F59500")
            bike.removeClass('md-light md-inactive');
            bike.addClass("link")
        })
        .mouseleave(function () {
            $(this).css("background-color", "transparent")
            bike.addClass('md-light md-inactive');
        })

    // Slider //
    mySlider
        .slider({
          formatter: function(value) {
               return value;
            }
        })
    mySlider
       .on('slideStop', function() {
           goal = $(this).slider('getValue');
           animateWater();
        });
    
    // Settings //
    settings_btn.click(function() {
       background_slider.slideToggle('fast');
    });

   function sumFct() {
        sum = 0;
        //percentage = 0;
        $.each(rows, function( index, value ) {
            sum = sum + parseInt($(this).find("td:eq(1)").text());
        });
        //console.log(sum);
        //sum = Math.round((sum/goal)*100);
        /*if (sum > 3800)
            sum = 3800;*/
        console.log(sum);
        return sum;
    }

    /*function colorFct() {
        myColor = "";
        var mySum = sumFct(); 
        if (mySum == 100){
            myColor = '#AFC440'
        }
        else if (mySum > 50 && mySum < 100  ) {
            myColor = '#F59500'
        }
        else {
            myColor ='#EF5252'
        }
        return myColor;
    }*/

    function animateLine() {
        if (goal == 2000)
            line.css('bottom', '130px');
        else if (goal == 3000)
            line.css('bottom', '228px');
        else if (goal == 4000)
            line.css('bottom', '308px');
        for (var i=0; i<5; i++) {
            line.fadeOut('slow').fadeIn('slow');
        };
    }

    function animateWater() {
        water.toggleClass("water-animate");
        px = (sumFct()/10);
        if (px >= 400)
            px = 380;
        water.css('height', px + 'px');
        animateLine();
        console.log(px);
    }
})