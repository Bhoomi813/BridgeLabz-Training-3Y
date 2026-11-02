const textBox = document.getElementById("textBox");
const counter = document.getElementById("counter");
const resetBtn = document.getElementById("resetBtn");

const maxCharacters = 100;

textBox.addEventListener("input", function () {

    const remaining = maxCharacters - textBox.value.length;

    counter.textContent = remaining;

    counter.classList.remove("warning", "danger");

    if (remaining <= 20 && remaining > 0) {
        counter.classList.add("warning");
    }

    if (remaining === 0) {
        counter.classList.add("danger");
    }
});

// Prevent typing after 100 characters
textBox.addEventListener("keydown", function (event) {

    if (textBox.value.length >= maxCharacters) {

        const allowedKeys = [
            "Backspace",
            "Delete",
            "ArrowLeft",
            "ArrowRight",
            "ArrowUp",
            "ArrowDown"
        ];

        if (!allowedKeys.includes(event.key)) {
            event.preventDefault();
        }
    }
});

resetBtn.addEventListener("click", function () {

    textBox.value = "";
    counter.textContent = "100";

    counter.classList.remove("warning", "danger");
});