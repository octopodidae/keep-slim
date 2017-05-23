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
    var goal = 3000;
    
    // Vertical Navigation //
    toogle.click(function() {
        $(this).toggleClass("on");
        /*nav.slideToggle();*/
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

   function sumFct() {
        sum = 0;
        $.each(rows, function( index, value ) {
            sum = sum + parseInt($(this).find("td:eq(1)").text());
            //console.log( $(this).find("td:eq(1)").text() );
            //console.log(sum);
        });
        sum = Math.round((sum/goal)*100);
        if (sum > 100)
            sum = 100;
        return sum;
    }

    function colorFct() {
        var myColor;
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
    }
    /*console.log(sumFct());*/

   doughnutWidget.options = {
        container: $('#container'),
        width: 100,
        height: 100,
        class: 'myClass',
        cutout: 50
      };
    doughnutWidget.render(data());
    setInterval(init, 2000);
    function init() {
      doughnutWidget.render(data());
    }
    function data() {
        var data = {
        pending: {
          val: sumFct(),
          color: colorFct()
        }
      };
      return data;
    }
  
})