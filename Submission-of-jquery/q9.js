
/* Version 1: Carousel and active widget */

jq1(document).ready(function() {

    // Carousel rotation using jQuery 1.12.4
    let slide = 1;

    setInterval(function() {

        slide++;

        if (slide > 5) {
            slide = 1;
        }

        jq1("#slide").text("Slide " + slide);

    }, 2000);

    // Highlight active widget
    jq1(".widget").click(function() {

        jq1(".widget").removeClass("active");

        jq1(this).addClass("active");

    });

});


/* Version 2: Modal and tooltips */

jq2(document).ready(function() {

    // Open modal popup
    jq2("#openModal").click(function() {
        jq2("#modal").fadeIn();
    });

    // Close modal popup
    jq2("#closeModal").click(function() {
        jq2("#modal").fadeOut();
    });

    // Show tooltip on hover
    jq2(".widget").hover(

        function() {
            jq2(this).find(".tooltip").show();
        },

        function() {
            jq2(this).find(".tooltip").hide();
        }

    );

});
