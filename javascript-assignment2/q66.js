
let count = 0;

// Increment counter
function increment() {
    count++;
    console.log("Count after increment:", count);
}

// Decrement counter
function decrement() {
    count--;
    console.log("Count after decrement:", count);
}

// Nested function to demonstrate scope
function counterDetails() {
    function showCount() {
        console.log("Current Count:", count);
    }

    showCount();
}

// Simulate button clicks
increment();
increment();
decrement();
counterDetails();
