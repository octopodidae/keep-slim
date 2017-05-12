/**
 * Created by Bertrand on 11/05/2017.
 */
$(document).ready(function() {

    var walk = $("#walk");
    var pool = $("#pool");
    var bike = $("#bike");
    var content_walk = $("#content_walk");
    var content_pool = $("#content_pool");
    var content_bike = $("#content_bike");

    content_walk
        .mouseenter(function() {
            $(this)
                .css("background-color", "#924DE6")
                /*.css("transform", "scale(1.3)")*/
                .css("transform", "rotate(360deg)")
            walk.removeClass('md-inactive')
        })
        .mouseleave(function() {
            $(this)
                .css("background-color", "transparent")
                /*.css("transform", "scale(1)")*/
                .css("transform", "rotate(0deg)")
            walk.addClass('md-inactive');
        })
    content_pool
        .mouseenter(function() {
            $(this)
                .css("background-color", "#EF5252")
                /*.css("transform", "scale(1.3)")*/
                .css("transform", "rotate(360deg)")
            pool.removeClass('md-inactive');
        })
        .mouseleave(function() {
            $(this)
                .css("background-color", "transparent")
                /*.css("transform", "scale(1)")*/
                .css("transform", "rotate(0deg)")
            pool.addClass('md-inactive');
        })
    content_bike
        .mouseenter(function() {
            $(this)
                .css("background-color", "#F59500")
                /*.css("transform", "scale(1.3)")*/
                .css("transform", "rotate(360deg)")
            bike.removeClass('md-inactive');
        })
        .mouseleave(function() {
            $(this)
                .css("background-color", "transparent")
                /*.css("transform", "scale(1)")*/
                .css("transform", "rotate(0deg)")
            bike.addClass('md-inactive');
        })

/*
    const ANGLE = 45;

    let wowpanels = document.querySelectorAll(".wowpanel");

    wowpanels.forEach((element) => {
        floatable(element);
});

    function floatable (panel) {
        let content = panel.querySelector(".content");

        panel.addEventListener('mouseout', e => {
            content.style.transform = `perspective(300px)
                                               rotateY(0deg)
                                               rotateX(0deg)`;
    });

        panel.addEventListener('mousemove', e => {
            let w = panel.clientWidth;
        let h = panel.clientHeight;
        let y = (e.offsetX - w * 0.5) / w * ANGLE;
        let x = (1 - (e.offsetY - h * 0.5)) / h * ANGLE;

        content.style.transform = `perspective(300px)
                                               rotateX(${x}deg)
                                               rotateY(${y}deg)`;
    });
    }
*/
});