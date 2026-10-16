// Declare weather conditions
let temperature = 12;
let isRaining = false;
let windSpeed = 25;

// Recommend an activity based on the weather
if (isRaining) {
    console.log("Stay indoors with hot coffee.");
} else if (temperature > 35) {
    console.log("Go swimming.");
} else if (temperature < 15 && windSpeed > 20) {
    console.log("Too cold and windy — stay home.");
} else {
    console.log("Perfect day for a walk.");
}

// Example of combining AND and OR conditions
if ((temperature > 35 || temperature < 15) && windSpeed > 20) {
    console.log("Weather is extreme and windy.");
}