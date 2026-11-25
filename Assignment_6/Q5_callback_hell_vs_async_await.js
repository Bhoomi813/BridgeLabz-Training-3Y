// Q5 - Frontend Rush: Avoiding Callback Hell

// Helper: simulate one asynchronous stage.
function runStage(stageName, callback) {
    setTimeout(() => {
        console.log(`${stageName} completed`);
        callback();
    }, 1000);
}

console.log("----- Nested callbacks (callback hell) -----");

// First implementation: nested callbacks.
runStage("Design", () => {
    runStage("Build", () => {
        runStage("Test", () => {
            runStage("Deploy", () => {
                runStage("Celebrate", () => {
                    console.log("Callback pipeline completed!");
                    runAsyncPipeline();
                });
            });
        });
    });
});

// Promise-based helper used by the async/await version.
function stagePromise(stageName) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${stageName} completed`);
            resolve();
        }, 1000);
    });
}

async function runAsyncPipeline() {
    console.log("\\n----- Async/await version -----");

    // await pauses this async function until the current stage Promise settles.
    // The stages remain sequential, but the code reads from top to bottom.
    await stagePromise("Design");
    await stagePromise("Build");
    await stagePromise("Test");
    await stagePromise("Deploy");
    await stagePromise("Celebrate");

    console.log("Async/await pipeline completed!");
}

 // async/await improves readability by avoiding deeply nested callbacks.
 // It also makes sequential asynchronous steps easier to debug and handle with try/catch.
