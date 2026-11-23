
$(document).ready(function() {

    // Hide the first banner
    $("#hide").click(function() {
        $(".banner:first").hide();
    });

    // Show all banners
    $("#show").click(function() {
        $(".banner").show();
    });

    // Slide up all banners
    $("#slideUp").click(function() {
        $(".banner").slideUp();
    });

    // Slide down all banners
    $("#slideDown").click(function() {
        $(".banner").slideDown();
    });

    // Fade in all banners
    $("#fadeIn").click(function() {
        $(".banner").fadeIn();
    });

    // Fade out all banners
    $("#fadeOut").click(function() {
        $(".banner").fadeOut();
    });

    // Automatically rotate banners every 5 seconds
    let current = 0;
    let banners = $(".banner");

    banners.hide();
    banners.eq(current).fadeIn();

    setInterval(function() {
        banners.eq(current).fadeOut(500);

        current = (current + 1) % banners.length;

        banners.eq(current).fadeIn(500);
    }, 5000);

});
