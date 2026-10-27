"use strict";

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const seats = Number(document.getElementById("seats").value);

    const namePattern = /^[A-Za-z ]+$/;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    let errorMessage = "";

    if (!namePattern.test(name)) {
        errorMessage = "Name must contain alphabets only.";
    } else if (!emailPattern.test(email)) {
        errorMessage = "Enter a valid email address.";
    } else if (
        document.getElementById("seats").value.trim() === "" ||
        !Number.isInteger(seats) ||
        seats < 1 ||
        seats > 10
    ) {
        errorMessage = "Seats must be a whole number from 1 to 10.";
    }

    document.getElementById("error").textContent = errorMessage;
    document.getElementById("ticket").textContent = "";

    if (errorMessage) {
        return;
    }

    const booking = { name, email, seats };

    document.getElementById("ticket").innerHTML = `
        <h3>Booking Successful!</h3>
        <p>Name: ${booking.name}</p>
        <p>Email: ${booking.email}</p>
        <p>Seats: ${booking.seats}</p>
    `;

    console.log("Booking Details:", booking);
});