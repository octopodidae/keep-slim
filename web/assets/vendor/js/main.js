$(document).ready(function() {

            var my_table = $('#myTable');
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
            var id_rows = $('.id'); 
            var last_nb_rows = id_rows.slice(0,5).parent();
            var currently_animating = false;


            /*last_nb_rows.show();
            loadData(5); */

            // Tablesorter
            my_table.tablesorter();

            // Blinking message into graphic area
            for ( var i = 0; i < 6; i++ ) {
                code.fadeToggle('slow');
            };

            // values displayed in the tooltip of slider
            /*my_slider
               .slider({
                    formatter: function(value) {
                        return value;
                    }
                });*/

            // Slider dragging stops -> Call load data / animate graphic functions
            /*my_slider 
            .on('slideStop', function(event) {
                var value = $(this).slider('getValue');
                id_rows.parent().hide();
                id_rows.slice(0,value).parent().show();
                graphic_area.children('.my-div').remove();
                loadData(value);
             });*/

            // Animate multi graphics with slider
            /*function loadData(nb){
                var jqxhr = 
                $.ajax( {'url':url_load + '/' + nb, 'async':true, 'cache':true}  )
                .done(function( data ) {
                    var json = JSON.parse(data);
                    code.remove();
                    graphic_area.children('.my-div').remove();
                    margin_left = 5;
                    for (var i=0; i<json.length;i++ ){
                        margin_left+=42;
                        var step = json[i];
                        var style = 'style="margin-left:' + margin_left + 'px'+ '"';
                        $('<div class="my-div text-center"' + ' id="div_' + (i+1) + '" ' +  style +  '>'+ json[i] + '</div>').appendTo(graphic_area);
                        animateGraphic(step, $('#div_' + (i+1)), speed);;
                    }
                })
                .fail(function() {
                    console.log( "error" );
                })
            }*/

            // Animate unique graphic on click
            /*$('tr')
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
            })*/

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
                line.fadeToggle( "slow", "linear", function() {
                    line.show();
                });
                $('.my-span').fadeIn(1500);
            }
})