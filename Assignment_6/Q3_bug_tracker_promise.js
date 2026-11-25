// Q3 - Bug Tracker: Callback to Promise Migration

function getBugs() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const shouldFail = Math.random() < 0.3;

            if (shouldFail) {
                reject(new Error("Bug tracking API request failed."));
            } else {
                resolve(["UI glitch", "API timeout", "Login failure"]);
            }
        }, 1000);
    });
}

getBugs()
    .then((bugs) => {
        console.log("Bugs retrieved successfully:");
        console.table(bugs.map((bug, index) => ({
            "S.No.": index + 1,
            "Bug": bug
        })));
    })
    .catch((error) => {
        console.error("Unable to fetch bugs:", error.message);
    });
