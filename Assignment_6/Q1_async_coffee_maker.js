// Q1 - The Startup Morning: Async Coffee Maker
// Each step returns a Promise and takes a random 1-2 seconds.

function waitForStep(stepName) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            // Simulate an occasional failure.
            if (Math.random() < 0.2) {
                reject(new Error(`${stepName} failed.`));
            } else {
                console.log(`${stepName} completed.`);
                resolve();
            }
        }, delay);
    });
}

console.log("Coffee preparation started...");

waitForStep("Boiling water")
    .then(() => waitForStep("Brewing coffee"))
    .then(() => waitForStep("Pouring coffee into a cup"))
    .then(() => console.log("Coffee ready for the team!"))
    .catch((error) => console.error("Coffee process failed:", error.message));
