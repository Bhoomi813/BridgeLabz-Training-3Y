
$(document).ready(function() {

    // Demo list of already registered emails
    let registeredEmails = [
        "test@gmail.com",
        "student@gmail.com"
    ];

    $("#registerForm").submit(function(event) {

        // Prevent default form submission
        event.preventDefault();

        let name = $("#name").val().trim();
        let email = $("#email").val().trim();
        let password = $("#password").val();

        let valid = true;

        // Reset previous validation styles
        $("input").css("border", "1px solid gray");

        $("#message").text("").css("color", "red");

        // Validate name
        if (name === "") {
            $("#name").css("border", "2px solid red");
            valid = false;
        }

        // Validate email format
        let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            $("#email").css("border", "2px solid red");
            valid = false;
        }
        else if (registeredEmails.includes(email.toLowerCase())) {
            $("#email").css("border", "2px solid red");
            $("#message").text("Email already registered!");
            valid = false;
        }

        // Validate password minimum 8 characters
        if (password.length < 8) {
            $("#password").css("border", "2px solid red");
            valid = false;
        }

        // Display success message if all fields are valid
        if (valid) {

            registeredEmails.push(email.toLowerCase());

            $("#message")
                .text("Registration Successful!")
                .css("color", "green");

            $("#registerForm")[0].reset();

        }
        else if ($("#message").text() === "") {

            $("#message").text("Please correct the highlighted fields.");

        }

    });

});
