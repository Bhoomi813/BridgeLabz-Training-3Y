"use strict";

class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }

    // Apply a percentage discount to the product price.
    applyDiscount(percent) {
        this.price -= this.price * percent / 100;
    }

    // Return formatted product details.
    displayDetails() {
        return `ID: ${this.id}, Name: ${this.name}, ` +
            `Price: ₹${this.price.toFixed(2)}, Category: ${this.category}`;
    }
}

const products = [
    new Product(1, "Laptop", 55000, "Electronics"),
    new Product(2, "Mouse", 800, "Accessories"),
    new Product(3, "Keyboard", 1500, "Accessories"),
    new Product(4, "Headphones", 2500, "Electronics")
];

products[0].applyDiscount(10);

console.log("All Products:");
products.forEach(product => console.log(product.displayDetails()));

console.log("\nProducts priced above ₹1000:");

const expensiveProducts = products.filter(product => product.price > 1000);

expensiveProducts.forEach(product => console.log(product.displayDetails()));