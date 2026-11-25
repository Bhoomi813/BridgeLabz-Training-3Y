// Q9 - Debugging the Event Loop

// Predicted output order:
// Script start
// Script end
// Promise callback
// Timeout callback

console.log("Script start");

setTimeout(() => {
    console.log("Timeout callback");
}, 0);

Promise.resolve().then(() => {
    console.log("Promise callback");
});

console.log("Script end");

// Explanation:
// Synchronous statements run first, in source order.
// Promise.then() queues a microtask, while setTimeout queues a macrotask.
// After synchronous code finishes, JavaScript runs microtasks before macrotasks.
