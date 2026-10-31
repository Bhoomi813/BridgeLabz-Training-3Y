function applyOperation(numbers, operation) {
    return numbers.map(operation);
}

// Double function
function double(num) {
    return num * 2;
}

// Square function
function square(num) {
    return num * num;
}

let numbers = [1, 2, 3, 4];

console.log("Doubled:", applyOperation(numbers, double));
console.log("Squared:", applyOperation(numbers, square));