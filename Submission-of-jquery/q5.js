
$(document).ready(function() {

    // Highlight direct reports of the selected manager
    $(".manager").click(function() {
        $(this).nextAll(".employee").addClass("highlight");
    });

    // Show contact details using next()
    $(".employee").hover(
        function() {
            $(this).find(".contact").show();
        },
        function() {
            $(this).find(".contact").hide();
        }
    );

    // Change background of all members using children()
    $(".department h2").click(function() {
        $(this).parent().children(".employee")
            .css("background", "#fde68a");
    });

    // Select random employee and highlight siblings
    $("#random").click(function() {
        let employees = $(".employee:not(.manager)");
        let randomIndex = Math.floor(Math.random() * employees.length);

        employees.removeClass("highlight");

        employees.eq(randomIndex).siblings(".employee")
            .addClass("highlight");
    });

    // Collapse or expand team using parent() and find()
    $("#collapse").click(function() {
        $("#team").parent().find(".department").slideToggle();
    });

});
