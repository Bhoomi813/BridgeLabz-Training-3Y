// Q4 - DevOps Delay: Async Timeout Race

function contactServer(serverName, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Each server has an independent chance of failure.
            if (Math.random() < 0.2) {
                reject(new Error(`${serverName} deployment failed.`));
            } else {
                resolve(`${serverName} responded successfully`);
            }
        }, delay);
    });
}

// Create each Promise only once so both combinators observe the same requests.
const serverA = contactServer("Server A", 2000);
const serverB = contactServer("Server B", 3000);

Promise.all([serverA, serverB])
    .then(() => {
        console.log("Deployment completed for all servers");
    })
    .catch((error) => {
        console.error("Deployment error:", error.message);
    });

Promise.race([serverA, serverB])
    .then((firstResponse) => {
        console.log("Fastest response:", firstResponse);
    })
    .catch((error) => {
        console.error("First response failed:", error.message);
    });

// Promise.all waits for every Promise to fulfill (or rejects on the first rejection).
// Promise.race settles as soon as the first Promise settles, whether fulfilled or rejected.
