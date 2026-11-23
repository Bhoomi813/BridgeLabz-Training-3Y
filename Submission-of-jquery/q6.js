
$(document).ready(function() {

    // Subscribe to notifications
    $("#subscribe").click(function() {
        $("#message").text("Successfully subscribed! Notifications enabled.");
    });

    // Unsubscribe from notifications
    $("#unsubscribe").click(function() {
        $("#message").text("Unsubscribed! Notifications disabled.");
    });

    // Attach click event to existing and future remove buttons
    $("#topics").on("click", ".remove", function() {
        $(this).parent().remove();
        $("#message").text("Topic removed successfully!");
    });

    // Dynamically add new topics
    $("#addTopic").click(function() {
        let topic = $("#newTopic").val().trim();

        if (topic !== "") {
            $("#topics").append(
                `<li>${$("<div>").text(topic).html()} 
                <button class="remove">Remove</button></li>`
            );

            $("#message").text("New topic added successfully!");
            $("#newTopic").val("");
        }
    });

    // Demonstrate off() by detaching the remove event
    $("#unsubscribe").click(function() {
        $("#topics").off("click", ".remove");
    });

});
