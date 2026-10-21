
let x = 16.75;

// Mathematical operations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

// Formatted summary using template literals
console.log(`
Math Utility Dashboard
----------------------
Original Number: ${x}
Rounded Value: ${roundedValue}
Square Root: ${squareRoot.toFixed(2)}
Power (x^3): ${powerValue.toFixed(3)}
Random Number (10-50): ${randomNumber}
`);
