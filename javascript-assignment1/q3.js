// Store expenses for five categories
let expenses = [5000, 1500, 8000, 2000, 1000];

// Calculate the total expense
let totalExpense = 0;

for (let expense of expenses) {
    totalExpense += expense;
}

// Calculate the average expense
let averageExpense = totalExpense / expenses.length;

// Add 10% tax using an assignment operator
let tax = totalExpense * 0.10;
let finalAmount = totalExpense;
finalAmount += tax;

// Display results rounded to two decimal places
console.log(`Total Expense: Rs. ${totalExpense.toFixed(2)}`);
console.log(`Average Expense: Rs. ${averageExpense.toFixed(2)}`);
console.log(`Tax (10%): Rs. ${tax.toFixed(2)}`);
console.log(`Final Amount: Rs. ${finalAmount.toFixed(2)}`);