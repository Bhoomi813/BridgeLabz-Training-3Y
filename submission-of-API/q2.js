const employeeList = document.getElementById("employeeList");
const errorMessage = document.getElementById("error");

const API_URL = "http://localhost:3002/employees";

// 1. Fetch all employees using XMLHttpRequest
function getEmployees() {

    const xhr = new XMLHttpRequest();

    xhr.open("GET", API_URL, true);

    xhr.onload = function () {

        if (xhr.status >= 200 && xhr.status < 300) {

            const employees = JSON.parse(xhr.responseText);

            displayEmployees(employees);

        } else {

            employeeList.innerHTML = "Failed to load employees";

        }
    };

    xhr.onerror = function () {
        employeeList.innerHTML = "Server connection failed";
    };

    xhr.send();
}


// 2. Display employees on screen
function displayEmployees(employees) {

    employeeList.innerHTML = "";

    employees.forEach(function (employee) {

        const isActive = employee.status === "active";

        const div = document.createElement("div");

        div.className = "employee";

        div.innerHTML = `
            <div>
                <h3>${employee.name}</h3>

                <p class="status ${employee.status}">
                    ${employee.status.toUpperCase()}
                </p>
            </div>

            <button
                class="toggle ${isActive ? "on" : "off"}"
                data-id="${employee.id}"
                data-status="${employee.status}">
                ${isActive ? "ON" : "OFF"}
            </button>
        `;

        employeeList.appendChild(div);

    });
}


// 3. Toggle employee status
employeeList.addEventListener("click", function (event) {

    if (!event.target.classList.contains("toggle")) {
        return;
    }

    const button = event.target;

    const id = button.dataset.id;

    const oldStatus = button.dataset.status;

    const newStatus =
        oldStatus === "active" ? "inactive" : "active";

    // Immediately update UI
    updateUI(button, newStatus);

    button.disabled = true;

    // 4. Send PATCH request
    const xhr = new XMLHttpRequest();

    xhr.open("PATCH", `${API_URL}/${id}`, true);

    xhr.setRequestHeader(
        "Content-Type",
        "application/json"
    );

    xhr.onload = function () {

        button.disabled = false;

        if (xhr.status >= 200 && xhr.status < 300) {

            errorMessage.textContent = "";

            console.log("Status updated successfully!");

        } else {

            // Revert UI if request fails
            updateUI(button, oldStatus);

            errorMessage.textContent =
                "Failed to update status. Please try again.";
        }
    };

    xhr.onerror = function () {

        button.disabled = false;

        // Revert UI
        updateUI(button, oldStatus);

        errorMessage.textContent =
            "Network error! Status update failed.";
    };

    xhr.send(JSON.stringify({
        status: newStatus
    }));

});


// 5. Update status on screen
function updateUI(button, status) {

    button.dataset.status = status;

    const isActive = status === "active";

    button.textContent = isActive ? "ON" : "OFF";

    button.className =
        `toggle ${isActive ? "on" : "off"}`;

    const statusText =
        button.parentElement.querySelector(".status");

    statusText.textContent = status.toUpperCase();

    statusText.className = `status ${status}`;
}


// Initially fetch employees
getEmployees();