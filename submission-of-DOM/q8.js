const dropdown = document.getElementById("dropdown");
const dropdownButton = document.getElementById("dropdownButton");
const options = document.getElementById("options");

dropdownButton.addEventListener("click", function (event) {

    event.stopPropagation();

    if (options.style.display === "block") {
        options.style.display = "none";
    } else {
        options.style.display = "block";
    }
});

// Select option
options.addEventListener("click", function (event) {

    if (event.target.classList.contains("option")) {

        dropdownButton.textContent = event.target.textContent;

        options.style.display = "none";
    }
});

// Capturing phase
document.addEventListener("click", function (event) {

    if (!dropdown.contains(event.target)) {
        options.style.display = "none";
    }

}, true);