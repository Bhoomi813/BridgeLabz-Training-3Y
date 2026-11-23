
$(document).ready(function() {

    // Highlight product on click
    $(".product").click(function() {
        $(this).toggleClass("highlight");

        // Show alert for out-of-stock product
        if ($(this).attr("data-stock") === "no") {
            alert("Sorry! This product is out of stock.");
        }
    });

    // Show product details on hover
    $(".product").hover(
        function() {
            $(this).find(".details").slideDown();
        },
        function() {
            $(this).find(".details").slideUp();
        }
    );

    // Toggle favorite selection
    $(".favorite").click(function(event) {
        event.stopPropagation();
        $(this).toggleClass("selected");
        $(this).text(
            $(this).hasClass("selected") ? "♥ Favorite" : "♡ Favorite"
        );
    });

    // Apply style to discounted products using attribute selector
    $("[data-discount]").css("border", "2px solid orange");

});
