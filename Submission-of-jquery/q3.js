
$(document).ready(function() {

    // Click question to toggle its answer
    $(".question").click(function() {
        $(this).next(".answer").slideToggle();
    });

    // Change question color on hover
    $(".question").hover(
        function() {
            $(this).css("color", "blue");
        },
        function() {
            $(this).css("color", "black");
        }
    );

    // Double-click to close all answers
    $(".question").dblclick(function() {
        $(".answer").slideUp();
    });

    // Highlight parent question when input gets focus
    $(".answer input").focus(function() {
        $(this).closest("section").find(".question")
            .css("background", "yellow");
    });

    // Reset question background on blur
    $(".answer input").blur(function() {
        $(this).closest("section").find(".question")
            .css("background", "#dbeafe");
    });

});
