// Q2 - Task Scheduler: Micro vs Macro Challenge

console.log("Start");

// setTimeout schedules a macrotask.
setTimeout(() => {
    console.log("setTimeout callback (macrotask)");
}, 0);

// Promise.then schedules a microtask.
Promise.resolve().then(() => {
    console.log("Promise callback (microtask)");
});

console.log("Synchronous log");
console.log("End");

// JavaScript first completes all synchronous code.
// Then it empties the microtask queue (Promise callbacks).
// Only after that does it run queued macrotasks such as setTimeout.
