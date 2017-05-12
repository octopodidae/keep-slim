$(document).ready(function() {

    // Variables
    var my_table = $('#myTable');
    var protocole = 'http://';
    var ip = '127.0.0.1';
    var port = ':80';
    var graphic_area = $('.graphic-area');
    var margin_left  = 88;
    var speed = 500;
    var line = $('#line');
    var previous = $('#previous');
    var next = $('#next');
    var rows = $('.rows');
    var start = 0; 
    var end = 10;
    var steps = 0;
    var first_row = rows.first();
    var last_row = rows.last();
    var mySlider = $('#mySlider');
    var settings_btn = $('#btn_settings'); 
    var background_slider = $('.background-slider');
    var goal = 10000;
    var sum_area = $('#sum');
    var toogle = $("#toggle");
    var nav = $("#navigation");
    var home = $("#home");
    var pool = $("#pool");
    var bike = $("#bike");
    var content_home = $("#content_home");
    var content_pool = $("#content_pool");
    var content_bike = $("#content_bike");
    var originColor = '';

    // Tablesorter
    my_table.tablesorter();

    // Show / Animate last ten rows when page is loaded
    rows.slice(start,end).show();
    animateAllGraphics();
    
    // Clean graphic area
    function cleanGraphiArea() {
        graphic_area.children('.my-div').remove();
    }

    // My Animate Graphic Function 
    function animateGraphic (steps, div, speed) {
        var px = 0;
        div.css( 'height', px );
        px = parseInt(Math.round(steps/100));
        //console.log(goal);
        div.html('<span style="bottom: ' + 16 + 'px; ' + '"' + 'class="my-span" >' + steps + '</span>');
        if (goal == 10000) {
            line.css('bottom', '100px');
            if (steps >= 5000 && steps < 10000) {
                div
                    .css('background-color', '#F59500')
                    .animate({ height: '+=' + px + 'px' }, steps)
                    .children('span').css({
                        color: '#F59500'
                    });
            }
            else if  (steps < 5000 ) {
                div
                    .css('background-color', '#EF5252')
                    .animate({ height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: '#EF5252'
                    });
            }
            else if  (steps >= 10000 ) {
                div
                    .css('background-color', '#AFC440')
                    .animate({  height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: '#AFC440'
                    });
            }

        }
        else if (goal == 20000) {
            line.css('bottom', '200px');
            if (steps >= 10000 && steps < 20000) {
                div
                    .css('background-color', '#F59500')
                    .animate({ height: '+=' + px + 'px' }, steps)
                    .children('span').css({
                        color: '#F59500'
                    });
            }
            else if  (steps < 10000 ) {
                div
                    .css('background-color', '#EF5252')
                    .animate({ height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: '#EF5252'
                    });
            }
            else if  (steps >= 20000 ) {
                div
                    .css('background-color', '#AFC440')
                    .animate({  height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: '#AFC440'
                    });
            }
        }
        else if (goal == 5000) {
            line.css('bottom', '50px');
            if (steps >= 2500 && steps < 5000) {
                div
                    .css('background-color', '#F59500')
                    .animate({ height: '+=' + px + 'px' }, steps)
                    .children('span').css({
                        color: '#F59500'
                    });
            }
            else if  (steps < 2500 ) {
                div
                    .css('background-color', '#EF5252')
                    .animate({ height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: '#EF5252'
                    });
            }
            else if  (steps >= 5000 ) {
                div
                    .css('background-color', '#AFC440')
                    .animate({  height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: '#AFC440'
                    });
            }
        }
        else if (goal == 15000) {
            line.css('bottom', '150px');
            if (steps >= 7500 && steps < 15000) {
                div
                    .css('background-color', '#F59500')
                    .animate({ height: '+=' + px + 'px' }, steps)
                    .children('span').css({
                        color: '#F59500'
                    });
            }
            else if  (steps < 7500 ) {
                div
                    .css('background-color', '#EF5252')
                    .animate({ height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: '#EF5252'
                    });
            }
            else if  (steps >= 15000 ) {
                div
                    .css('background-color', '#AFC440')
                    .animate({  height: '+=' + px + 'px' }, speed)
                    .children('span').css({
                        color: '#AFC440'
                    });
            }
        }
        $('.my-span').fadeIn(1500);
    }

    // Loop for animate all graphics
    function animateAllGraphics() {
        margin_left = 88;
        rows
        .slice(start,end)
        .each(function( index ) {
            var data_id = $(this).attr('data-id');
            steps = $( this ).find(':nth-child(3)').text();
            var style = 'style="margin-left:' + margin_left + '%'+ '"';
            var attr = ' data-id=' + data_id; 
            $('<div class="my-div text-center"' + ' id="div_' + (index+1) + '" ' +  style + attr + '>'+ steps +'</div>').appendTo(graphic_area);
            animateGraphic(steps, $('#div_' + (index+1)), speed);
            margin_left-=9.5;
        });
        sumFct(); 
        animateLine();

    };
    
    // Previous  
    previous.click(function() {
         if (last_row.is(':visible')){
            /*previous.attr('disabled', 'disabled');
            previous.addClass('disabled');
            next.removeAttr('disabled');
            next.removeClass('disabled');
            next.addClass('active');*/
        } else {
            /*previous.addClass('active');*/
            start+=10;
            end+=10;
            rows.hide();
            cleanGraphiArea();
            rows.slice(start,end).show();
            animateAllGraphics();
        }
    });
   
    // Next
    next.click(function() {
         if (first_row.is(':visible')){
           /* next.attr('disabled', 'disabled');
            next.addClass('disabled');
            previous.removeAttr('disabled');
            previous.removeClass('disabled');
            previous.addClass('active');*/
        } else {
            start-=10;
            end-=10;
            rows.hide();
            cleanGraphiArea();
            rows.slice(start,end).show();
            animateAllGraphics();
        }
    });

    // Transform graphic when over on row
    rows.hover(
        function() {
            //mouse over
            var attr = $(this).attr('data-id');
            originColor = $('.my-div[data-id=' + attr + ']').css('background-color');
            $('.my-div[data-id=' + attr + ']').css('background', 'aqua');
            $('.my-div[data-id=' + attr + ']').find('span').css('color', 'aqua');

        }, function() {
            var attr = $(this).attr('data-id');
            $('.my-div[data-id=' + attr + ']').css('background', originColor);
            $('.my-div[data-id=' + attr + ']').find('span').css('color', originColor);
        });

    // Slider
    mySlider
        .slider({
          formatter: function(value) {
               return value;
            }
        })
    mySlider
       .on('slideStop', function() {
           goal = $(this).slider('getValue');
           cleanGraphiArea();
           animateAllGraphics();
        });

    // Settings
    settings_btn.click(function() {
       background_slider.slideToggle('fast');
    });

    // Animate line
    function animateLine() {
        for (var i=0; i<5; i++) {
        line.fadeOut('slow').fadeIn('slow');
        };
    };

    function sumFct() {
        var sum_steps = 0;
        var sum_km = 0;
        var goalx10 = goal * 10;
        var percentage = 0;
        $.each( $('.rows:visible td:nth-child(3)'), function( i, td ){
            var val = parseInt($(td).html());
            sum_steps += val;
        });
        $.each( $('.rows:visible td:nth-child(2)'), function( i, td ){
            var val = parseInt($(td).html());
            sum_km += val;
        });
        percentage = (sum_steps / goalx10) * 100;
        percentage = parseInt(Math.round(percentage)); 
        var msg = sum_steps + ' . ' + sum_km + ' km . ' + percentage + ' % of goal';
        if (sum_steps >= goalx10) {
            sum_area.html(msg).css('background-color', '#AFC440').css('color', 'white');;
        } else if (sum_steps >= (goalx10/2) || goalx10 < sum_steps) {
            sum_area.html(msg).css('background-color', '#F59500').css('color', 'white');;
        } else {
            sum_area.html(msg).css('background-color', '#EF5252').css('color', 'white');;
        }
    }

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

    content_pool
        .mouseenter(function () {
            $(this).css("background-color", "#EF5252")
            pool.removeClass('md-light md-inactive');
            pool.addClass("link")
        })
        .mouseleave(function () {
            $(this).css("background-color", "transparent")
            pool.addClass('md-light md-inactive');
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
})