const searchBox = document.getElementById("searchBox");
const rows = document.querySelectorAll("#studentTable tr");
const noResult = document.getElementById("noResult");

searchBox.addEventListener("input", function () {

    const searchText = searchBox.value.toLowerCase();

    let found = false;

    rows.forEach(function (row) {

        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchText)) {
            row.style.display = "";
            found = true;
        } else {
            row.style.display = "none";
        }
    });

    if (!found) {
        noResult.textContent = "No results found";
    } else {
        noResult.textContent = "";
    }
});