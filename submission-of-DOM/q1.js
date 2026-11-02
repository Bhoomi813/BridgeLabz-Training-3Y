const productInput = document.getElementById("productInput");
const addBtn = document.getElementById("addBtn");
const productList = document.getElementById("productList");

addBtn.addEventListener("click", function () {

    const productName = productInput.value.trim();

    if (productName === "") {
        return;
    }

    const li = document.createElement("li");

    li.innerHTML = `
        <span>${productName}</span>
        <button class="edit">Edit</button>
        <button class="delete">Delete</button>
    `;

    productList.appendChild(li);
    productInput.value = "";
});

// Event Delegation
productList.addEventListener("click", function (event) {

    const li = event.target.parentElement;

    if (event.target.classList.contains("delete")) {
        li.remove();
    }

    if (event.target.classList.contains("edit")) {

        const span = li.querySelector("span");

        if (!li.classList.contains("editing")) {
            span.contentEditable = true;
            span.focus();
            li.classList.add("editing");
        } else {
            span.contentEditable = false;
            li.classList.remove("editing");
        }
    }
});

// Auto-save when clicking outside edited item
document.addEventListener("click", function (event) {

    const editingItem = document.querySelector(".editing");

    if (editingItem && !editingItem.contains(event.target)) {

        const span = editingItem.querySelector("span");

        span.contentEditable = false;
        editingItem.classList.remove("editing");
    }
});