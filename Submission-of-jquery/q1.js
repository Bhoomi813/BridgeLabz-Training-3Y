
$(document).ready(function() {

    // Display greeting according to current time
    let hour = new Date().getHours();

    if (hour < 12) {
        $("#greeting").text("Good Morning!");
    } 
    else if (hour < 17) {
        $("#greeting").text("Good Afternoon!");
    } 
    else {
        $("#greeting").text("Good Evening!");
    }

    // Change greeting into motivational quote
    $("#changeGreeting").click(function() {
        $("#greeting").text("Believe in yourself. You can do it!");
    });

    // Toggle welcome message visibility
    $("#toggleMessage").click(function() {
        $("#welcomeMessage").toggle();
    });

    // Show alert when greeting is clicked
    $("#greeting").click(function() {
        alert("Welcome to our website!");
    });

});
