
 // Global variable
let bonus = 5000;

function calculateSalary(isPermanent) {
    // Local variable
    let salary = 40000;

    // Add bonus only if employee is permanent
    if (isPermanent === true) {
        salary = salary + bonus;
    }

    // Display total salary
    console.log("Total Salary:", salary);
    
    // Demonstrate global scope
    bonus = bonus + 1000;
    console.log("Updated Global Bonus:", bonus);
}

// Function calls
calculateSalary(true);
calculateSalary(false);

// Access global variable outside the function
console.log("Final Global Bonus:", bonus);
