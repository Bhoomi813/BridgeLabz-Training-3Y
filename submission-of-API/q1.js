
$(document).ready(function() {

    // Load all products when page opens
    loadProducts("");

    function loadProducts(value) {

        $("#loading").show();
        $("#results").empty();

        // Send GET request using jQuery AJAX
        $.ajax({
            url: "http://localhost:3001/products",
            method: "GET",
            data: {
                q: value
            },

            success: function(products) {

                $("#loading").hide();

                if (products.length === 0) {
                    $("#results").html("<h3>No products found</h3>");
                    return;
                }

                products.forEach(function(product) {

                    $("#results").append(`
                        <article class="product">
                            <img src="${product.image}"
                                 alt="${product.name}">

                            <div>
                                <h3>${product.name}</h3>
                                <p>Price: ₹${product.price}</p>
                            </div>
                        </article>
                    `);

                });

            },

            error: function() {
                $("#loading").hide();
                $("#results").html("<p>Failed to load products.</p>");
            }
        });
    }

    // Search products whenever user types
    $("#search").keyup(function() {

        let value = $(this).val().trim();

        loadProducts(value);

    });

});
