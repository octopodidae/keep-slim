$(document).ready(function() {

    // Variables
    var my_table = $('#myTable');
    var protocole = 'http://';
    var ip = '127.0.0.1';
    var port = ':8081';
    var graphic_area = $('.graphic-area');
    var margin_left = 18;
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
        div.html('<span style="bottom: ' + 13 + 'px; ' + '"' + 'class="my-span" >' + steps + '</span>');
        if (steps >= 5000 && steps < 10000) {
            div
                .css('background-color', 'orange')
                .animate({ height: '+=' + px + 'px' }, steps)
                .children('span').css({
                    color: 'orange',
                    'background-color': '#f5f5f5'
                });
        }
        else if  (steps < 5000 ) {
            div
                .css('background-color', '#FE2E2E')
                .animate({ height: '+=' + px + 'px' }, speed)
                .children('span').css({
                    color: '#FE2E2E',
                    'background-color': '#f5f5f5'
                });
        }
        else if  (steps >= 10000 ) {
            div
                .css('background-color', 'rgb(109,202,78)')
                .animate({  height: '+=' + px + 'px' }, speed)
                .children('span').css({
                    color: 'rgb(109,202,78)',
                    'background-color': '#f5f5f5'
                });
        }
        line.fadeToggle( "slow", "linear", function() {
            line.show();
        });
        $('.my-span').fadeIn(1500);
    }

    // Loop for animate all graphics
    function animateAllGraphics() {
        margin_left = 18;
        rows
        .slice(start,end)
        .each(function( index ) {
            steps = $( this ).find(':nth-child(3)').text();
            var style = 'style="margin-left:' + margin_left + 'px'+ '"';
            $('<div class="my-div text-center"' + ' id="div_' + (index+1) + '" ' +  style +  '>'+ steps + '</div>').appendTo(graphic_area);
            animateGraphic(steps, $('#div_' + (index+1)), speed);
            margin_left+=52;
        });
    };
    
    // Previous  
    previous.click(function() {
         if (last_row.is(':visible')){
            previous.hasClass('disabled');
         } else {
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
            next.hasClass('disabled');
         } else {
            start-=10;
            end-=10;
            rows.hide();
            cleanGraphiArea();
            rows.slice(start,end).show();
            animateAllGraphics();
        }
    });
})