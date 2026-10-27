"use strict";

const readline = require("node:readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter pyramid height (default 5): ", (answer) => {
    const height = answer.trim() === "" ? 5 : Number(answer);

    if (!Number.isInteger(height) || height < 1 || height > 100) {
        console.log("Enter a whole number between 1 and 100.");
        rl.close();
        return;
    }

    for (let i = 1; i <= height; i++) {
        let row = "";

        for (let j = 1; j <= i; j++) {
            row += "* ";
        }

        console.log(row.trimEnd());
    }

    rl.close();
});