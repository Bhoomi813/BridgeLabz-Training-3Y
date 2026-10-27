"use strict";

class Employee {
    constructor(id, name, department, salary) {
        this.id = id;
        this.name = name;
        this.department = department;
        this.salary = salary; // Monthly salary
    }

    getAnnualSalary() {
        return this.salary * 12;
    }

    applyBonus(percent) {
        if (!Number.isFinite(percent) || percent < 0) {
            throw new Error("Bonus percentage must be non-negative.");
        }

        this.salary += this.salary * percent / 100;
    }

    displayDetails() {
        console.log(
            `ID: ${this.id}, Name: ${this.name}, ` +
            `Department: ${this.department}, ` +
            `Annual Salary: ₹${this.getAnnualSalary().toFixed(2)}`
        );
    }
}

const employees = [
    new Employee(1, "Amit", "IT", 45000),
    new Employee(2, "Sara", "HR", 38000),
    new Employee(3, "Kiran", "Finance", 52000),
    new Employee(4, "Ravi", "IT", 40000),
    new Employee(5, "Neha", "Marketing", 35000)
];

// Apply a 10% bonus to the monthly salary of the first employee.
employees[0].applyBonus(10);

console.log("Employee Details:");

employees.forEach(employee => employee.displayDetails());

// Calculate total annual payout after the bonus.
const totalAnnualPayout = employees.reduce(
    (total, employee) => total + employee.getAnnualSalary(),
    0
);

console.log(
    "\nTotal Annual Payout: ₹" + totalAnnualPayout.toFixed(2)
);