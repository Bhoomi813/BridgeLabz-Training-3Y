"use strict";

const studentForm = document.getElementById("studentForm");

const validators = {
    name: /^[A-Za-z]+$/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^\d{10}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9\s])\S+$/
};

const messages = {
    name: "Name must contain alphabets only.",
    email: "Enter a valid email address.",
    phone: "Phone must contain exactly 10 digits.",
    password: "Password needs uppercase, number and special character."
};

function validateField(field) {
    const input = document.getElementById(field);
    const error = document.getElementById(field + "Error");
    const isValid = validators[field].test(input.value);

    input.classList.toggle("valid", isValid);
    input.classList.toggle("invalid", !isValid);
    error.textContent = isValid ? "" : messages[field];

    return isValid;
}

studentForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const fields = ["name", "email", "phone", "password"];
    const allValid = fields.map(validateField).every(Boolean);

    const result = document.getElementById("result");

    if (allValid) {
        result.style.color = "green";
        result.textContent = "Registration successful!";
    } else {
        result.style.color = "red";
        result.textContent = "Please correct the errors.";
    }
});