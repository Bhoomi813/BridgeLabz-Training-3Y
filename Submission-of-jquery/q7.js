
$(document).ready(function() {

    // Filter courses whenever user types something
    $("#search").keyup(function() {

        let value = $(this).val().toLowerCase();
        let count = 0;

        $(".course").each(function() {

            let courseName = $(this).text();

            // Remove previous highlighting
            $(this).find("h3").html(courseName);

            if (courseName.toLowerCase().includes(value)) {

                // Show matching courses
                $(this).show();
                count++;

                // Highlight matched text
                if (value !== "") {
                    let regex = new RegExp(
                        "(" + value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")",
                        "ig"
                    );

                    let highlighted = courseName.replace(
                        regex,
                        '<span class="match">$1</span>'
                    );

                    $(this).find("h3").html(highlighted);
                }

            } else {
                // Hide courses that do not match
                $(this).hide();
            }

        });

        // Display matching course count
        $("#count").text("Matching Courses: " + count);

    });

    // Clear search and display all courses
    $("#clear").click(function() {

        $("#search").val("");
        $(".course").show();
        $(".course h3").each(function() {
            $(this).text($(this).text());
        });

        $("#count").text("Total Courses: " + $(".course").length);

    });

});
