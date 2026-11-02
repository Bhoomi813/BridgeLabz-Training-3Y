const steps = document.querySelectorAll(".step");

const backBtn = document.getElementById("backBtn");
const nextBtn = document.getElementById("nextBtn");

let currentStep = 0;

function showStep() {

    steps.forEach(function (step) {
        step.classList.remove("active");
    });

    steps[currentStep].classList.add("active");

    backBtn.style.display = currentStep === 0 ? "none" : "inline";

    nextBtn.textContent =
        currentStep === steps.length - 1 ? "Submit" : "Next";
}

function validateStep() {

    if (currentStep === 0) {
        return document.getElementById("name").value.trim() !== "";
    }

    if (currentStep === 1) {
        const email = document.getElementById("email").value;

        return email.includes("@");
    }

    if (currentStep === 2) {
        return document.getElementById("password").value.length >= 6;
    }
}

nextBtn.addEventListener("click", function () {

    if (!validateStep()) {
        alert("Please enter valid information.");
        return;
    }

    if (currentStep < steps.length - 1) {
        currentStep++;
        showStep();
    } else {

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        document.getElementById("summary").innerHTML = `
            <h3>Form Completed</h3>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
        `;

        nextBtn.style.display = "none";
        backBtn.style.display = "none";
    }
});

backBtn.addEventListener("click", function () {

    if (currentStep > 0) {
        currentStep--;
        showStep();
    }
});

showStep();