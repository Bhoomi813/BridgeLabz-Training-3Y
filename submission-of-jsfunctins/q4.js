function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// Adding method to prototype
Car.prototype.getDetails = function() {
    console.log(this.brand + " " + this.model);
};

// Creating objects
let car1 = new Car("Toyota", "Fortuner");
let car2 = new Car("Hyundai", "Creta");

// Calling prototype method
car1.getDetails();
car2.getDetails();