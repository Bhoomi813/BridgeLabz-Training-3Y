const images = document.querySelectorAll(".gallery img");
const modal = document.getElementById("modal");
const modalImage = document.getElementById("modalImage");

images.forEach(function (image) {

    image.addEventListener("click", function () {

        modal.style.display = "flex";

        modalImage.src = image.src;
    });
});

// Clicking outside closes modal
modal.addEventListener("click", function () {
    modal.style.display = "none";
});

// Clicking image does not close modal
modalImage.addEventListener("click", function (event) {
    event.stopPropagation();
});