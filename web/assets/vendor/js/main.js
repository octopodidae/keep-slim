$(document).ready(function() {

            var table = $('#myTable');
            var div_table = $('#div_table');
            var display_hide_list = $('#display_hide_list');
            var protocole = 'http://';
            var ip = '127.0.0.1';
            var port = ':8081';
            var graphic_area = $('.graphic-area');
            var code = $('.code');
            var my_slider = $('#my_slider');
            var url_load = 'http://' + ip + port + '/keep_slim/web/app_dev.php/walking/load';
            var margin_left = 0;
            var speed = 500;
            var line = $('#line');
                        
            // values displayed in the tooltip of slider
            my_slider
               .slider({
                    formatter: function(value) {
                        return value;
                    }
                });

            // Animate multi graphics with slider
            var loadData = function loadData(nb){
                var jqxhr = 
                $.ajax( {'url':url_load + '/' + nb, 'async':true, 'cache':true}  )
                .done(function( data ) {
                    var json = JSON.parse(data);
                    code.remove();
                    graphic_area.children('.my-div').remove();
                    margin_left = 0;
                    for (var i=0; i<json.length;i++ ){
                        margin_left+=50;
                        var step = json[i];
                        var style = 'style="margin-left:' + margin_left + 'px'+ '"';
                        $('<div class="my-div text-center"' + ' id="div_' + (i+1) + '" ' +  style +  '>'+ json[i] + '</div>').appendTo(graphic_area);
                        animateGraphic(step, $('#div_' + (i+1)), speed);
                    }
                })
                .fail(function() {
                    console.log( "error" );
                })
            }

            // Slider dragging stops -> Call load data / animate graphic functions
            my_slider 
            .on('slideStop', function(event) {
                var value = $(this).slider('getValue');
                loadData(value);
             });

            // Tablesorter
            table.tablesorter();

            // display/hide table
            display_hide_list.click(function () {
                div_table.slideToggle('slow');
            });

            // Blinking message into graphic area
            for ( var i = 0; i < 6; i++ ) {
                code.fadeToggle('slow');
            };

            // Animate unique graphic on click
            $('tr')
                .click(function () {
                    code.remove();
                    graphic_area.children('.my-div').remove();
                    var url = protocole + ip + port + $(this).attr('data-url');
                    var jqxhr = $.ajax( {'url':url, 'async':true, 'cache':true}  )
                        .done(function( data ) {
                            var json = JSON.parse(data);
                            animateGraphic(json.step, $('<div class="my-div text-center"></div>').appendTo(graphic_area), speed);
                        })
                        .fail(function() {
                            console.log( "error" );
                        })
            })

            // My Animate Graphic Function 
            function animateGraphic (step, div, speed) {
                var px = 0;
                div.css( 'height', px );
                px = parseInt(Math.round(step/100));
                div.html('<span style="bottom: ' + 13 + 'px; ' + '"' + 'class="my-span" >' + step + '</span>');
                if (step >= 5000 && step < 10000) {
                    div
                        .css('background-color', 'orange')
                        .animate({ height: '+=' + px + 'px' }, speed)
                        .children('span').css({
                            color: 'orange',
                            'background-color': '#f5f5f5'
                        });
                }
                else if  (step < 5000 ) {
                    div
                        .css('background-color', '#FE2E2E')
                        .animate({ height: '+=' + px + 'px' }, speed)
                        .children('span').css({
                            color: '#FE2E2E',
                            'background-color': '#f5f5f5'
                        });
                }
                else if  (step >= 10000 ) {
                    div
                        .css('background-color', 'rgb(109,202,78)')
                        .animate({  height: '+=' + px + 'px' }, speed)
                        .children('span').css({
                            color: 'rgb(109,202,78)',
                            'background-color': '#f5f5f5'
                        });
                }
                line.fadeIn(2000);
                $('.my-span').fadeIn(1500);
            }
        })