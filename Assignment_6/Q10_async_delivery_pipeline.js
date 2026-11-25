// Q10 - The Final Delivery: Async Pipeline Debugger

// Every delivery step resolves or rejects after a random 1-2 second delay.
function performDeliveryStep(stepName, successMessage) {
    return new Promise((resolve, reject) => {
        const delay = 1000 + Math.random() * 1000;

        setTimeout(() => {
            // Simulate a 20% chance that the current step fails.
            if (Math.random() < 0.2) {
                reject(new Error(`${stepName} failed`));
            } else {
                console.log(successMessage);
                resolve();
            }
        }, delay);
    });
}

async function runPipeline() {
    console.log("Start Pipeline");

    try {
        // await makes the next step wait until the current Promise succeeds.
        await performDeliveryStep("takeOrder", "Step 1: Order taken");
        await performDeliveryStep("prepare", "Step 2: Food prepared");
        await performDeliveryStep("pack", "Step 3: Package ready");
        await performDeliveryStep("dispatch", "Step 4: Out for delivery");
        await performDeliveryStep("deliver", "Delivery completed!");
    } catch (error) {
        // If any step rejects, execution jumps directly to this catch block.
        console.error("Pipeline failed!", error.message);
    }
}

runPipeline();
