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
                .css("transform", "scale(1.3)")
            walk
                .removeClass('md-inactive')
        })
        .mouseleave(function() {
            $(this)
                .css("background-color", "transparent")
                .css("transform", "scale(1)")
            walk
                .addClass('md-inactive');
        })
    content_pool
        .mouseenter(function() {
            $(this)
                .css("background-color", "#EF5252")
                .css("transform", "scale(1.3)")
            pool
                .removeClass('md-inactive');
        })
        .mouseleave(function() {
            $(this)
                .css("background-color", "transparent")
                .css("transform", "scale(1)")
            pool
                .addClass('md-inactive');
        })
    content_bike
        .mouseenter(function() {
            $(this)
                .css("background-color", "#F59500")
                .css("transform", "scale(1.3)")
            bike
                .removeClass('md-inactive');
        })
        .mouseleave(function() {
            $(this)
                .css("background-color", "transparent")
                .css("transform", "scale(1)")
                bike
                    .addClass('md-inactive');
        })
});