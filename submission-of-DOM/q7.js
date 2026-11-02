const box = document.getElementById("box");
const coordinates = document.getElementById("coordinates");

box.addEventListener("mousemove", function (event) {

    coordinates.textContent =
        `X: ${event.clientX}, Y: ${event.clientY}`;
});

box.addEventListener("dblclick", function (event) {

    const rect = box.getBoundingClientRect();

    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const dot = document.createElement("div");

    dot.classList.add("dot");

    dot.style.left = x + "px";
    dot.style.top = y + "px";

    box.appendChild(dot);
});