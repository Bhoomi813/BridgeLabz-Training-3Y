// Store the user's name
let userName = "Bhoomi";

// Get the current hour (0 to 23)
let currentHour = new Date().getHours();

// Display a greeting according to the current time
if (currentHour < 12) {
    console.log(`Good Morning ${userName}!`);
} else if (currentHour <= 17) {
    console.log(`Good Afternoon ${userName}!`);
} else {
    console.log(`Good Evening ${userName}!`);
}