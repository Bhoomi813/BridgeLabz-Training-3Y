// API Base URL
const API_URL = "http://localhost:3004";

// Get HTML elements
const usersElement = document.getElementById("users");
const ordersElement = document.getElementById("orders");
const productsElement = document.getElementById("products");

const warning = document.getElementById("warning");


// 1. Fetch data from API
function fetchData(endpoint) {

    return fetch(`${API_URL}/${endpoint}`)
        .then(function (response) {

            if (!response.ok) {
                throw new Error("API request failed");
            }

            return response.json();

        });

}


// 2. Remove skeleton loading
function removeSkeleton() {

    usersElement.classList.remove("skeleton");

    ordersElement.classList.remove("skeleton");

    productsElement.classList.remove("skeleton");

}


// 3. Load all APIs using Promise.all()
function loadDashboard() {

    Promise.all([

        fetchData("users").catch(function () {
            return null;
        }),

        fetchData("orders").catch(function () {
            return null;
        }),

        fetchData("products").catch(function () {
            return null;
        })

    ])

    .then(function (results) {

        // Store API responses
        const users = results[0];
        const orders = results[1];
        const products = results[2];


        // Display total users
        if (users !== null) {

            usersElement.textContent = users.length;

        } else {

            usersElement.textContent = "N/A";

        }


        // Display total orders
        if (orders !== null) {

            ordersElement.textContent = orders.length;

        } else {

            ordersElement.textContent = "N/A";

        }


        // Display total products
        if (products !== null) {

            productsElement.textContent = products.length;

        } else {

            productsElement.textContent = "N/A";

        }


        // Show warning if any API fails
        if (results.includes(null)) {

            warning.textContent =
                "Some data could not be loaded.";

        } else {

            warning.textContent = "";

        }

    })

    .catch(function (error) {

        console.log("Dashboard Error:", error);

        warning.textContent =
            "Some data could not be loaded.";

    })

    .finally(function () {

        // Remove skeleton after loading
        removeSkeleton();

    });

}


// 4. Initially load dashboard
loadDashboard();